import { IPushNotificationService } from "../../../application/ports/services/IPushNotificationService";

// Sample Implementation of pubsub/push notification service

export class PushNotificationService implements IPushNotificationService {

  subscribe(topic: string, notify = () => true) {
    if (notify()) {
      // PubSub.asyncIterator([topic])
    }
  }

  publish(topic: string, data: any) {
    // PubSub.publish(topic, data)
  }
}

const notifier = new PushNotificationService();

notifier.subscribe('USER:CREATED', () => {
  return false;
});