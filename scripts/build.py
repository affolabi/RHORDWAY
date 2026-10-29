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

if __name__ == '__main__':
    ensure_dirs()
    build_css()
    build_js()
    print("Build complete.")
