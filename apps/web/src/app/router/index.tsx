/**
 * =====================================
 * Eraxis
 * Module: Routing
 *
 * Purpose:
 * Central route configuration.
 *
 * Technical Debt:
 * - TD-004
 *
 * =====================================
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../../pages/login";
import DashboardPage from "../../pages/dashboard";
import ApplicationsPage from "../../pages/applications";
import AdministrationPage from "../../pages/administration";
import SettingsPage from "../../pages/settings";
import ProfilePage from "../../pages/profile";
import AppearanceSettingsPage from "../../pages/settings/appearance";

import LocalizationSettingsPage from "../../pages/settings/localization";

import ProfileSettingsPage from "../../pages/settings/profile";

import TenantSettingsPage from "../../pages/settings/tenant";

import SystemSettingsPage from "../../pages/settings/system";

import FeatureSettingsPage from "../../pages/settings/features";

import PreferencesPage from "../../pages/settings/preferences";

import ActivityPage from "../../pages/activity";

import StoragePage from "../../pages/storage";

import MediaPage from "../../pages/media";

import RealtimePage from "../../pages/realtime";

import HealthPage from "../../pages/health";

import UsersPage from "../../pages/users";

import RolesPage from "../../pages/roles";

import PermissionsPage from "../../pages/permissions";

import TenantsPage from "../../pages/tenants";

import BranchesPage from "../../pages/branches";

import ProtectedRoute from "../../guards/protected-route";

import CommercePage from "../../pages/commerce";

import ProductsPage from "../../pages/products";

import CategoriesPage from "../../pages/categories";

import InventoryPage from "../../pages/inventory";

import CustomersPage from "../../pages/customers";

import OrdersPage from "../../pages/orders";

import PricingPage from "../../pages/pricing";

import BrandsPage from "../../pages/brands";

import ProductVariantsPage from "../../pages/product-variants";

import CustomerAddressesPage from "../../pages/customer-addresses";

import OrderLifecyclePage from "../../pages/order-lifecycle";

import OrderItemsPage from "../../pages/order-items";

import InvoicesPage from "../../pages/invoices";

import PaymentsPage from "../../pages/payments";

import TaxesPage from "../../pages/taxes";

import DiscountsPage from "../../pages/discounts";

import ShippingPage from "../../pages/shipping";

import FormTestPage from "../../pages/form-test";

import ReportTestPage from "../../pages/report-test";

import LocationsPage from "../../pages/locations";

import BrandingSettingsPage from "../../pages/settings/branding";

import BillingSettingsPage from "../../pages/settings/billing";

import SubscriptionSettingsPage from "../../pages/settings/subscriptions";

import LicenseSettingsPage from "../../pages/settings/licenses";

import WorkflowsPage from "../../pages/settings/workflows";

import MetadataPage from "../../pages/settings/metadata";

import { getRoutes } from "../../features/runtime/routes/route-registry";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute permission="dashboard:view">
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="/applications" element={<ApplicationsPage />} />

        <Route path="/administration" element={<AdministrationPage />} />

        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/settings" element={<SettingsPage />} />

        <Route
          path="/settings/appearance"
          element={<AppearanceSettingsPage />}
        />

        <Route
          path="/settings/localization"
          element={<LocalizationSettingsPage />}
        />

        <Route path="/settings/profile" element={<ProfileSettingsPage />} />

        <Route path="/settings/tenant" element={<TenantSettingsPage />} />

        <Route path="/settings/system" element={<SystemSettingsPage />} />
        <Route path="/settings/features" element={<FeatureSettingsPage />} />
        <Route path="/settings/preferences" element={<PreferencesPage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/storage" element={<StoragePage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/realtime" element={<RealtimePage />} />
        <Route path="/health" element={<HealthPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/roles" element={<RolesPage />} />
        <Route path="/permissions" element={<PermissionsPage />} />
        <Route path="/tenants" element={<TenantsPage />} />
        <Route path="/branches" element={<BranchesPage />} />
        <Route path="/commerce" element={<CommercePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/customers" element={<CustomersPage />} />

        <Route path="/orders" element={<OrdersPage />} />

        <Route path="/pricing" element={<PricingPage />} />

        <Route path="/brands" element={<BrandsPage />} />

        <Route path="/product-variants" element={<ProductVariantsPage />} />

        <Route path="/customer-addresses" element={<CustomerAddressesPage />} />

        <Route path="/order-lifecycle" element={<OrderLifecyclePage />} />

        <Route path="/order-items" element={<OrderItemsPage />} />

        <Route path="/invoices" element={<InvoicesPage />} />

        <Route path="/payments" element={<PaymentsPage />} />

        <Route path="/taxes" element={<TaxesPage />} />
        <Route path="/discounts" element={<DiscountsPage />} />

        <Route path="/shipping" element={<ShippingPage />} />

        <Route path="/form-test" element={<FormTestPage />} />
        <Route path="/report-test" element={<ReportTestPage />} />

        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/settings/branding" element={<BrandingSettingsPage />} />

        <Route path="/settings/billing" element={<BillingSettingsPage />} />

                <Route
          path="/settings/subscriptions"
          element={<SubscriptionSettingsPage />}
        />
        <Route path="/settings/licenses" element={<LicenseSettingsPage />} />

        <Route path="/settings/workflows" element={<WorkflowsPage />} />

        <Route path="/settings/metadata" element={<MetadataPage />} />
{getRoutes().map((route) => (
  <Route
    key={route.path}
    path={route.path}
    element={route.element}
  />
))}     

 </Routes>
    </BrowserRouter>
  );
}
