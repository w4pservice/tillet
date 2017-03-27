import { DaemonRuntimes } from './daemon-runtimes'

export interface DockerInfo {

ID:                     string;
containers:             number;
containersRunning:      number;
containersPaused:       number;
containersStopped:      number;
images:                 number;
driver:                 string;
memoryLimit:            boolean;
swapLimit:              boolean;
kernelMemory:           boolean;
cpuCfsPeriod:           boolean;
cpuCfsQuota:            boolean;
cPUShares:              boolean;
cPUSet:                 boolean;
iPv4Forwarding:         boolean;
bridgeNfIp6tables:      boolean;
debug:                  boolean;
nFd:                    number;
oomKillDisable:         boolean;
nGoroutines:            number;
systemTime:             string;
loggingDriver:          string;
cgroupDriver:           string;
nEventsListener:        number;
kernelVersion:          string;
operatingSystem:        string;
oSType:                 string;
architecture:           string;
indexServerAddress:     string;
registryConfig:         string;
nCPU:                   number;
memTotal:               number;
dockerRootDir:          string;
httpProxy:              string;
httpsProxy:             string;
noProxy:                string;
name:                   string;
labels:                 string;
experimentalBuild:      string;
serverVersion:          string;
clusterStore:           string;
clusterAdvertise:       string;
Runtimes:               DaemonRuntimes;
defaultRuntime:         string;
liveRestoreEnabled:     string;
isolation:              string;
initBinary:             string;
}
