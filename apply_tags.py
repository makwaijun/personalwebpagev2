#!/usr/bin/env python3
"""
apply_tags.py

One-time script to add/normalize `tags:` front matter across your Hugo blog posts.
Run this from inside your project root (personalwebpagev2/), or pass the path
to your content/blog folder as an argument.

Usage:
    python3 apply_tags.py
    python3 apply_tags.py /path/to/content/blog

What it does:
- For each post listed in tag_map.py, it inserts or replaces the `tags:` line
  in the front matter with a clean, lowercase, hyphenated tag list.
- Posts NOT in tag_map.py are left completely untouched.
- Makes a .bak backup of every file it touches, so you can easily revert.
"""

import re
import sys
import shutil
from pathlib import Path

from tag_map import TAG_MAP

def format_tags_line(tags):
    quoted = ", ".join(f'"{t}"' for t in tags)
    return f"tags: [{quoted}]"

def update_front_matter(text, tags_line):
    """Insert or replace the tags: line inside the --- front matter block."""
    fm_match = re.match(r"^---\n(.*?\n)---\n?", text, re.DOTALL)
    if not fm_match:
        print("  WARNING: no front matter found, skipping.")
        return text

    fm_body = fm_match.group(1)
    rest = text[fm_match.end():]

    if re.search(r"^tags:.*$", fm_body, re.MULTILINE):
        new_fm_body = re.sub(r"^tags:.*$", tags_line, fm_body, flags=re.MULTILINE)
    else:
        # Append tags line at the end of the front matter block
        new_fm_body = fm_body.rstrip("\n") + "\n" + tags_line + "\n"

    return f"---\n{new_fm_body}---\n{rest}"

def main():
    blog_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("content/blog")

    if not blog_dir.exists():
        print(f"Could not find folder: {blog_dir}")
        print("Run this from your project root, or pass the path to content/blog as an argument.")
        sys.exit(1)

    updated = 0
    skipped = 0

    for filename, tags in TAG_MAP.items():
        path = blog_dir / filename
        if not path.exists():
            print(f"  SKIP (not found): {filename}")
            skipped += 1
            continue

        text = path.read_text(encoding="utf-8")
        tags_line = format_tags_line(tags)
        new_text = update_front_matter(text, tags_line)

        if new_text != text:
            shutil.copy(path, path.with_suffix(path.suffix + ".bak"))
            path.write_text(new_text, encoding="utf-8")
            print(f"  updated: {filename} -> {tags}")
            updated += 1
        else:
            print(f"  no change needed: {filename}")

    print(f"\nDone. {updated} files updated, {skipped} not found.")
    print("Backups saved alongside each file as *.md.bak")
    print("Review with: git diff content/blog")
    print("If everything looks right, delete backups with: find content/blog -name '*.bak' -delete")

if __name__ == "__main__":
    main()
