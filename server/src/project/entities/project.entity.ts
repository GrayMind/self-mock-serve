import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Project {
  /**
   * 项目id
   */
  @PrimaryGeneratedColumn()
  id: number;
  /**
   * 项目名称
   */
  @Column()
  projectName: string;
  /**
   * 项目描述
   */
  @Column()
  description: string;
  /**
   * 路由通用前缀
   */
  @Column()
  prefix: string;
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
