import React from 'react';
import { Footer, SettingsCog } from "../components/components";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useSelector } from "react-redux";

// Create a client
const queryClient = new QueryClient();

const ClientLayout = (props) => {
    /* props */
    const { children } = props;
    /* data layer */
    const theme = useSelector((state) => state.theme.theme);

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <div className={theme ? "dark" : ""}>
                    {/* children (page content) */}
                    <div className="bg-white dark:bg-dark-color-900">
                        <SettingsCog />
                        {children}
                    </div>

                    {/* main footer */}
                    <div>
                        <Footer />
                    </div>
                </div>
                {/* query dev tools */}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    );
}

export default ClientLayout;