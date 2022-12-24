import { loadEnvConfig } from "@next/env";

// テスト環境でenvを使用できるようにするために使用
const setupEnv = async (): Promise<void> => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
};

export default setupEnv;
