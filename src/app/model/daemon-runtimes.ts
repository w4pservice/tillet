import { DockerRuntimes } from './docker-runtimes.interface';

export class DaemonRuntimes implements DockerRuntimes {

    runc: string;
}