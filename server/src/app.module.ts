import { Dependencies, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { DataSource } from 'typeorm';
import { Project } from './project/entities/project.entity';
import { MockModule } from './mock/mock.module';
import { Mock } from './mock/entities/mock.entity';

@Dependencies(DataSource)
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // 数据库类型
      database: 'db.sql', // 文件存放路径
      autoLoadEntities: true, // 自动加载实体
      synchronize: true, // 项目启动的时候会根据实体的配置，自动创建 sqlite3 的数据库表
      entities: [Project, Mock],
    }),
    ProjectModule,
    MockModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  public dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }
}
