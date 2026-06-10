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
    <div>
      {sections.map(
        (section) => (
          <div key={section.id}>
            <Link
              to={section.route}
            >
              {section.name}
            </Link>
          </div>
        )
      )}
    </div>
  );
}