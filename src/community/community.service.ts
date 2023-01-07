import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CommentDto,
  GroupDto,
  GroupUpdateDto,
  PostDto,
  PostUpdateDto,
  CommentUpdateDto,
} from './dto';

@Injectable()
export class CommunityService {
  constructor(private prisma: PrismaService) {}

  async getGroups() {
    return await this.prisma.groups.findMany();
  }

  async getGroupById(groupId: string) {
    return await this.prisma.groups.findUnique({
      where: {
        id: groupId,
      },
    });
  }

  async getGroupByAdminId(adminId: string) {
    return await this.prisma.groups.findMany({
      where: {
        adminId: adminId,
      },
    });
  }

  // search group by name
  // async searchGroupbyName(search: string) {
  //   console.log(search);
  //   return await this.prisma.groups.findMany({
  //     where: {
  //       name: {
  //         contains: search,
  //         mode: 'insensitive',
  //       },
  //     },
  //   });
  // }

  async createGroup(groupDto: GroupDto) {
    return await this.prisma.groups.create({
      data: {
        name: groupDto.name,
        description: groupDto.description,
        center: groupDto.center,
        groupType: groupDto.groupType,
        backgroundImage: groupDto.backgroundImage,
        activity: groupDto.activity,
        members: groupDto.members,
        adminId: groupDto.adminId,
      },
    });
  }

  async updateGroup(groupId: string, groupDto: GroupUpdateDto) {
    return await this.prisma.groups.update({
      where: {
        id: groupId,
      },
      data: {
        name: groupDto.name,
        description: groupDto.description,
        center: groupDto.center,
        groupType: groupDto.groupType,
        backgroundImage: groupDto.backgroundImage,
        activity: groupDto.activity,
        members: groupDto.members,
        adminId: groupDto.adminId,
      },
    });
  }

  async joinGroup(groupId: string, userId: string) {
    return await this.prisma.groups.update({
      where: {
        id: groupId,
      },
      data: {
        members: userId,
      },
    });
  }

  async leaveGroup() {
    return 'leave group';
  }

  async deleteGroup(groupId: string) {
    return await this.prisma.groups.delete({
      where: {
        id: groupId,
      },
    });
  }

  // Post end point for creating a comment

  async getAllPosts() {
    return await this.prisma.post.findMany();
  }

  async getPostById(postId: string) {
    return await this.prisma.post.findUnique({
      where: {
        id: postId,
      },
    });
  }

  async createPost(PostDto: PostDto) {
    return await this.prisma.post.create({
      data: {
        slug: PostDto.slug,
        title: PostDto.title,
        body: PostDto.body,
        authorId: PostDto.authorId,
        groupId: PostDto.groupId,
      },
    });
  }

  async updatePost(postDto: PostUpdateDto) {
    return await this.prisma.post.update({
      where: {
        id: postDto.id,
      },
      data: {
        slug: postDto.slug,
        title: postDto.title,
        body: postDto.body,
        authorId: postDto.authorId,
        groupId: postDto.groupId,
      },
    });
  }

  async deletePost(postId: string) {
    return this.prisma.post.delete({
      where: {
        id: postId,
      },
    });
  }

  async createComment(commentDto: CommentDto) {
    return this.prisma.comment.create({
      data: {
        comment: commentDto.comment,
        authorId: commentDto.authorId,
        postId: commentDto.postId,
      },
    });
  }

  async getCommentById(commentId: string) {
    return await this.prisma.comment.findUnique({
      where: {
        id: commentId,
      },
    });
  }

  async getAllComments() {
    return await this.prisma.comment.findMany();
  }

  async updateComment(CommentUpdateDto: CommentUpdateDto) {
    return await this.prisma.comment.update({
      where: {
        id: CommentUpdateDto.id,
      },
      data: {
        comment: CommentUpdateDto.comment,
        authorId: CommentUpdateDto.authorId,
        postId: CommentUpdateDto.postId,
      },
    });
  }

  async deleteComment(commentId: string) {
    return await this.prisma.comment.delete({
      where: {
        id: commentId,
      },
    });
  }

  // Update like count for post, Need to be tracked users
  async likePost(postId: string) {
    return this.prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        likes: {
          increment: 1,
        },
      },
    });
  }

  async deleteLike() {
    return 'delete like';
  }
}
