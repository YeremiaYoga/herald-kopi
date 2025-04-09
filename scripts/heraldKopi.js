async function heraldKopi_openTabLink(link) {
  if (!link || typeof link !== "string") {
    ui.notifications.warn("Link tidak valid.");
    return;
  }
  window.open(link, "_blank");
}

export { heraldKopi_openTabLink };
