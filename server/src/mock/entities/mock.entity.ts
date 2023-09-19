import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Mock {
  /**
   * 接口id
   */
  @PrimaryGeneratedColumn()
  id: number;
  /**
   * 项目id
   */
  @Column()
  projectId: number;
  /**
   * 接口描述
   */
  @Column()
  description: string;
  /**
   * 接口地址
   */
  @Column()
  url: string;
  /**
   * 请求方法
   */
  @Column()
  method: string;
  /**
   * 请求参数
   */
  @Column()
  parameters: string;
  /**
   * 返回结果
   */
  @Column()
  responseModel: string;
  /**
   * 创建时间
   */
  @CreateDateColumn()
  createTime: number;
  /**
   * 更新时间
   */
  @UpdateDateColumn()
  updateTime: number;
}
