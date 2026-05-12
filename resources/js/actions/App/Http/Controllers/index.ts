import DashboardController from './DashboardController'
import VulnerabilityController from './VulnerabilityController'
import ThreatController from './ThreatController'
import AssetController from './AssetController'
import CommentController from './CommentController'
import Settings from './Settings'
const Controllers = {
    DashboardController: Object.assign(DashboardController, DashboardController),
VulnerabilityController: Object.assign(VulnerabilityController, VulnerabilityController),
ThreatController: Object.assign(ThreatController, ThreatController),
AssetController: Object.assign(AssetController, AssetController),
CommentController: Object.assign(CommentController, CommentController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers