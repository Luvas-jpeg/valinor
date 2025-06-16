// src/card/card.module.ts
import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from '../entities/card.entity';
import { ColumnEntity } from '../entities/column.entity';
import { ColumnModule } from '../column/column.module';

@Module({
  imports: [TypeOrmModule.forFeature([Card, ColumnEntity]), ColumnModule],
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule {}
