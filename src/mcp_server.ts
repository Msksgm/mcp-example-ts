import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import axios from 'axios';

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
    const url = (
      'https://api.open-meteo.com/v1/forecast?' +
      'latitude=35.7&longitude=139.7&current_weather=true&' +
      'hourly=temperature_2m,relative_humidity_2m,wind_speed_10m'
    );
    
    try {
      const response = await axios.get(url);
      const weatherData = response.data as any;
      const currentWeather = weatherData.current_weather || {};
      const temperature = currentWeather.temperature;
      
      const result = {
        temperature: temperature,
        unit: 'celsius',
        location: 'Tokyo',
        timestamp: new Date().toISOString(),
      };
      
      return {
        content: [
          {
            type: 'text',
            text: `東京の現在の温度は${temperature}℃です`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `エラーが発生しました: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
      };
    }
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
