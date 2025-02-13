import Banner from "./Banner/Banner";
import InputSearch from "./InputSearch/InputSearch";

interface HeaderProps {
    onSearch: (url: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
    return (
        <>
            <div className="shadow-md">
                <Banner />
                <InputSearch onSearch={onSearch} />
            </div>
        </>
    )
}

export default Header