import { Spin } from "antd";

export const Loader = () => {
    return (
        <Spin size="large" fullscreen className="bg-primary-950 dark:bg-slate-800" />
    );
};