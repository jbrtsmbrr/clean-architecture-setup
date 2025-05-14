export interface IPushNotificationService {
  subscribe(topic: string, notify?: () => boolean): void;
  publish(topic: string, data: any): void;
}