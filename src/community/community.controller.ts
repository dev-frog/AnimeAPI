import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
} from '@nestjs/common';
import { CommunityService } from './community.service';

import {
  PostDto,
  GroupDto,
  PostUpdateDto,
  CommentDto,
  CommentUpdateDto,
} from './dto';

@Controller('community')
export class CommunityController {
  constructor(private CommunityService: CommunityService) {}
  @Post('/group')
  async createGroup(@Body() groupDto: GroupDto) {
    return this.CommunityService.createGroup(groupDto);
  }

  @Get('/group')
  async getGroups() {
    return this.CommunityService.getGroups();
  }

  // this endpoint overlaps with post endpoint
  @Get('/group/:id')
  async getGroupById(@Param('id') groupId: string) {
    return this.CommunityService.getGroupById(groupId);
  }

  @Get('/group/admin')
  async searchGroup(@Body() id: string) {
    return this.CommunityService.getGroupByAdminId(id);
  }

  // this endpoint overlaps with post endpoint
  @Put('/group/:id')
  async updateGroup(@Param('id') groupId: string, @Body() groupDto: GroupDto) {
    return this.CommunityService.updateGroup(groupId, groupDto);
  }

  @Delete('/group/:id')
  async deleteGroup(@Param('id') groupId: string) {
    return this.CommunityService.deleteGroup(groupId);
  }

  @Post('/group/join')
  async joinGroup() {
    return 
  }

  @Put('/group/leave')
  async leaveGroup() {
    return 'leave group';
  }

  // Post end point for creating a comment

  @Post('/post')
  async createPost(@Body() postDto: PostDto) {
    return this.CommunityService.createPost(postDto);
  }

  @Get('/post')
  async getAllPosts() {
    return this.CommunityService.getAllPosts();
  }

  @Get('/post/:id')
  async getPostById(@Param('id') postId: string) {
    return this.CommunityService.getPostById(postId);
  }

  @Put('/post')
  async updatePost(@Body() postDto: PostUpdateDto) {
    return this.CommunityService.updatePost(postDto);
  }

  @Delete('/post/:id')
  async deletePost(@Param('id') postId: string) {
    return this.CommunityService.deletePost(postId);
  }

  @Post('/comment')
  async createComment(@Body() commentDto: CommentDto) {
    return this.CommunityService.createComment(commentDto);
  }

  @Get('/comment')
  async getAllComments() {
    return this.CommunityService.getAllComments();
  }

  @Put('/comment')
  async updateComment(@Body() commentDto: CommentUpdateDto) {
    return this.CommunityService.updateComment(commentDto);
  }

  @Delete('/comment/:id')
  async deleteComment(@Param('id') commentId: string) {
    return this.CommunityService.deleteComment(commentId);
  }

  @Post('/like/:id')
  async likePost(@Param('id') postId: string) {
    return this.CommunityService.likePost(postId);
  }
}
