import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('/messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) { }

  @Get()
  listMessages() {
    return this.messagesService.findAll()
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body)
    return this.messagesService.CreateMessage(body.content)
  }

  @Get("/:id")
  async getMesage(@Param("id") id: string) {

    const message = await this.messagesService.findOne(id)
    if (!message) {
      throw new NotFoundException("Message not found...")
    }
    console.log(id);
    return message
  }
}
