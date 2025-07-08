import { describe, it, expect, vi, beforeEach } from 'vitest';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import axios from 'axios';

// モジュールをモック
vi.mock('@modelcontextprotocol/sdk/server/stdio.js');
vi.mock('axios');

describe('MCP Server', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should create an instance successfully', () => {
    const server = new McpServer({
      name: 'TokyoWeatherServer',
      version: '1.0.0',
    });

    expect(server).toBeDefined();
    expect(server).toBeInstanceOf(McpServer);
  });

  it('should connect to transport', async () => {
    const server = new McpServer({
      name: 'TokyoWeatherServer',
      version: '1.0.0',
    });

    const mockTransport = new StdioServerTransport();

    // connectメソッドが呼び出せることを確認
    await expect(server.connect(mockTransport)).resolves.not.toThrow();
  });
});
