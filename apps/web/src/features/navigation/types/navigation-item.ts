/**
 * =====================================
 * Eraxis
 * Module: Navigation
 *
 * Purpose:
 * Navigation item contract.
 * =====================================
 */

// export type NavigationItem = {
//   label: string;
//   path: string;
//   group: string;

//   permission?: string;
// };

export type NavigationItem = {
  id: string;

  label: string;

  path: string;

  group: string;

  icon?: string;

  permission?: string;

  applicationId?: string;

  order?: number;
};