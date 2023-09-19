export class CreateProjectDto {
  /**
   * 项目名称
   */
  readonly projectName: string;
  /**
   * 项目描述
   */
  readonly description: string;
  /**
   * 路由通用前缀
   */
  readonly prefix: string;
}
