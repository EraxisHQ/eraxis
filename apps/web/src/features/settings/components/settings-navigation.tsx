import {
  Link,
} from "react-router-dom";

import {
  useSettings,
} from "../hooks/use-settings";

export default function SettingsNavigation() {
  const sections =
    useSettings();

  return (
    <>
      {sections.map(
        (section) => (
          <Link
            key={section.id}
            className="settings-link"
            to={section.route}
          >
            {section.name}
          </Link>
        )
      )}
    </>
  );
}