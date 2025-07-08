import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

// MCPサーバーの初期実装
const server = new McpServer({
  name: 'TokyoWeatherServer',
  version: '1.0.0',
});

// 東京の気温取得ツールを登録
server.registerTool(
  'get_tokyo_temperature',
  {
    title: 'Get Tokyo Temperature',
    description: '東京の現在の気温を取得します',
    inputSchema: {},
  },
  async () => {
    // TODO: 実際の気温取得APIの実装
    const mockData = {
      temperature: 20.5,
      unit: 'celsius',
      location: 'Tokyo',
      timestamp: new Date().toISOString(),
    };

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(mockData, null, 2),
        },
      ],
    };
  }
);

// サーバーの起動
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('MCP server running on stdio');
}

main().catch((error) => {
  console.error('Server error:', error);
  process.exit(1);
});
