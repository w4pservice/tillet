import { DockerVersion } from './docker-version.interface';

export class DaemonVersion implements DockerVersion {

    Version: string;
    ApiVersion: string;
    MinAPIVersion: string;
    GitCommit: string;
    GoVersion: string;
    Os: string;
    Arch: string;
    KernelVersion: string;
    BuildTime: string;

}