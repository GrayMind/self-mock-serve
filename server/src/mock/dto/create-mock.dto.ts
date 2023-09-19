export class CreateMockDto {
  /**
   * 项目id
   */
  projectId: number;
  /**
   * 接口描述
   */
  description: string;
  /**
   * 接口地址
   */
  url: string;
  /**
   * 请求方法
   */
  method: string;
  /**
   * 请求参数
   */
  parameters: string;
  /**
   * 返回结果
   */
  responseModel: string;
}
