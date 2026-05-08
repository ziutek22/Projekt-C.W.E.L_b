import VulnerabilityController from './VulnerabilityController'
import ThreatController from './ThreatController'
import AssetController from './AssetController'
import Settings from './Settings'
const Controllers = {
    VulnerabilityController: Object.assign(VulnerabilityController, VulnerabilityController),
ThreatController: Object.assign(ThreatController, ThreatController),
AssetController: Object.assign(AssetController, AssetController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers