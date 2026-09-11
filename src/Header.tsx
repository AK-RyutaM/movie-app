function Header({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header>
                <h1>MOVIEFLIX</h1>
            </header>
            <main>{children}</main>
        </>
    );
}

export default Header;
