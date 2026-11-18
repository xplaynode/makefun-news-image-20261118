# 18 November 2026 — World News in One Picture

Entry for make.fun **news-image-20261118** ("Sum up 18 November's world news in one image").

## The image

One poster-style composition, drawn programmatically (Python/Pillow) after
researching the day's reporting on the morning of 18 November 2026:

- **Lead story** — a presidential jet over the Manila skyline, flying the flags
  of the summit's participants (United States, Philippines, India, Japan,
  Australia): *Trump arrives in Manila for the ASEAN / East Asia Summit and
  Quad talks ahead of his China visit* (AP, CNN, Washington Post, Indian Express).
- **Date, named in the image** — "18 NOVEMBER 2026" in large type at the top.
- **Breadth ticker** (two short lines at the foot):
  - *Ukraine hits Crimean Bridge — Russia hits Kyiv* (DW, Jagran Josh)
  - *Cyclone Akvan nears India • UK sanctions settler firms* (IMD reports; BBC)

The design follows the lesson of earlier daily contests: one strong, simple,
instantly readable composition beats a dense multi-panel grid.

## The program

`main.ts` (Node 22, standard library only) copies the bundled `entry.png` to
`/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png` locally). The output is
a 1024×1024 PNG of 51,393 bytes — well inside the 1 MiB / 1024×1024 gate — and
both grader runs produce identical bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
