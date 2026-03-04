export function setSEO({ title, description }, brandTitle) {
  const fullTitle = title ? `${title} • ${brandTitle}` : brandTitle;
  document.title = fullTitle;

  const meta = document.querySelector('meta[name="description"]');
  if (meta && typeof description === "string") meta.setAttribute("content", description);
}