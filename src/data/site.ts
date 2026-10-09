// Site-wide settings. Edit these values rather than page code.

export const site = {
  name: 'Wild Oyster Works',
  heroStatement: 'Art that lives with you.',
  supportingStatement:
    'Original paintings, transformed furniture, and unexpected beauty from the Wild Oyster Works studio.',
  location: 'a historic New England studio',

  /**
   * Inquiry email address. Leave empty until the business address is decided:
   * the inquiry form will then let visitors copy their message instead of opening email.
   */
  contactEmail: '',

  /**
   * When true, image slots without a photo yet show a labeled placeholder.
   * On by default during development so missing photographs are easy to spot;
   * off in production builds so unfinished slots simply disappear.
   */
  showMissingImageSlots: import.meta.env.DEV,
};
