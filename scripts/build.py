#!/usr/bin/env python3
"""
RHORDWAY PRODUCTION BUNDLER & VERIFIER
Bundles clean modular ES6 CSS and JS into high-performance dist/ assets
supporting both module execution and direct single-file standalone execution.
"""

import os
import re

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = os.path.join(BASE_DIR, 'src')
DIST_DIR = os.path.join(BASE_DIR, 'dist')

def ensure_dirs():
    os.makedirs(DIST_DIR, exist_ok=True)

def build_css():
    css_files = [
        os.path.join(SRC_DIR, 'styles', 'tokens.css'),
        os.path.join(SRC_DIR, 'styles', 'base.css'),
        os.path.join(SRC_DIR, 'styles', 'components.css'),
    ]
    combined_css = "/* RHORDWAY PRODUCTION STYLES */\n\n"
    for path in css_files:
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as f:
                combined_css += f"/* --- {os.path.basename(path)} --- */\n"
                combined_css += f.read() + "\n\n"
        else:
            print(f"Warning: CSS file not found: {path}")

    out_path = os.path.join(DIST_DIR, 'styles.css')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(combined_css)
    print(f"Compiled CSS -> {out_path} ({len(combined_css)} bytes)")

def clean_module(code):
    code = re.sub(r'import\s+[^;]+;', '', code)
    code = re.sub(r'\bexport\s+const\b', 'const', code)
    code = re.sub(r'\bexport\s+function\b', 'function', code)
    code = re.sub(r'\bexport\s+default\b', '', code)
    return code

def build_js():
    source_order = [
        os.path.join(SRC_DIR, 'config', 'siteConfig.js'),
        os.path.join(SRC_DIR, 'config', 'packagesData.js'),
        os.path.join(SRC_DIR, 'utils', 'whatsapp.js'),
        os.path.join(SRC_DIR, 'utils', 'pdfGenerator.js'),
        os.path.join(SRC_DIR, 'components', 'SiteHeader.js'),
        os.path.join(SRC_DIR, 'components', 'CampaignHero.js'),
        os.path.join(SRC_DIR, 'components', 'ExperienceSelector.js'),
        os.path.join(SRC_DIR, 'components', 'DestinationFeature.js'),
        os.path.join(SRC_DIR, 'components', 'ActivityGallery.js'),
        os.path.join(SRC_DIR, 'components', 'PriceOptionSelector.js'),
        os.path.join(SRC_DIR, 'components', 'InformationCollation.js'),
        os.path.join(SRC_DIR, 'components', 'TrustSection.js'),
        os.path.join(SRC_DIR, 'components', 'FAQAccordion.js'),
        os.path.join(SRC_DIR, 'components', 'FinalCTA.js'),
        os.path.join(SRC_DIR, 'components', 'EnquiryModal.js'),
        os.path.join(SRC_DIR, 'main.js'),
    ]

    combined_js = "(function() {\n  'use strict';\n\n"
    for path in source_order:
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                cleaned = clean_module(content)
                combined_js += f"  /* --- {os.path.basename(path)} --- */\n"
                combined_js += cleaned + "\n\n"
        else:
            print(f"Warning: Source file not found: {path}")

    combined_js += "})();\n"
    out_path = os.path.join(DIST_DIR, 'app.js')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(combined_js)
    print(f"Compiled JS -> {out_path} ({len(combined_js)} bytes)")

import shutil

def sync_assets_and_html():
    # 1. Copy assets/ into dist/assets/
    assets_src = os.path.join(BASE_DIR, 'assets')
    assets_dst = os.path.join(DIST_DIR, 'assets')
    if os.path.exists(assets_src):
        if os.path.exists(assets_dst):
            shutil.rmtree(assets_dst)
        shutil.copytree(assets_src, assets_dst)
        print(f"Copied assets -> {assets_dst}")

    # 2. Generate dist/index.html tailored for dist-rooted deployment (Vite preset)
    root_index = os.path.join(BASE_DIR, 'index.html')
    if os.path.exists(root_index):
        with open(root_index, 'r', encoding='utf-8') as f:
            html = f.read()
        
        # Replace dist/paths with direct relative paths for when dist/ is the deployment root
        dist_html = html.replace('href="./dist/styles.css"', 'href="./styles.css"')
        dist_html = dist_html.replace('src="./dist/app.js"', 'src="./app.js"')
        dist_index_path = os.path.join(DIST_DIR, 'index.html')
        with open(dist_index_path, 'w', encoding='utf-8') as f:
            f.write(dist_html)
        print(f"Generated dist/index.html -> {dist_index_path}")

    # 3. Create dist/dist alias so both ./dist/app.js and ./app.js work seamlessly
    nested_dist = os.path.join(DIST_DIR, 'dist')
    os.makedirs(nested_dist, exist_ok=True)
    shutil.copy2(os.path.join(DIST_DIR, 'styles.css'), os.path.join(nested_dist, 'styles.css'))
    shutil.copy2(os.path.join(DIST_DIR, 'app.js'), os.path.join(nested_dist, 'app.js'))
    print("Created fallback dist/dist/ assets")

    # 4. Sync to public/
    public_dir = os.path.join(BASE_DIR, 'public')
    if os.path.exists(public_dir):
        public_dist = os.path.join(public_dir, 'dist')
        os.makedirs(public_dist, exist_ok=True)
        shutil.copy2(os.path.join(DIST_DIR, 'styles.css'), os.path.join(public_dist, 'styles.css'))
        shutil.copy2(os.path.join(DIST_DIR, 'app.js'), os.path.join(public_dist, 'app.js'))
        public_assets = os.path.join(public_dir, 'assets')
        if os.path.exists(assets_src):
            if os.path.exists(public_assets):
                shutil.rmtree(public_assets)
            shutil.copytree(assets_src, public_assets)

if __name__ == '__main__':
    ensure_dirs()
    build_css()
    build_js()
    sync_assets_and_html()
    print("Build complete.")
