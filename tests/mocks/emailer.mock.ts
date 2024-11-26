import { IEmailerPort } from "../../src/interfaces/libraries/IEmailer";


export class MockEmailer implements IEmailerPort {
  send() { }
}