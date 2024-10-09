import SettingsTable from "../features/settings/SettingsTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Settings() {
  return (
    <>
      <Row>
        <Heading>Settings</Heading>
      </Row>
      <SettingsTable />
    </>
  );
}

export default Settings;
