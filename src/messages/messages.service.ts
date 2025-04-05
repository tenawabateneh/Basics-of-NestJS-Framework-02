import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';


@Injectable()
export class MessagesService {
  constructor(public messageRepository: MessagesRepository) {

  }

  findAll() {
    return this.messageRepository.findAll()
  }

  CreateMessage(content: string) {
    return this.messageRepository.createMessage(content)
  }
  findOne(id: string) {
    return this.messageRepository.findOne(id)
  }

}
