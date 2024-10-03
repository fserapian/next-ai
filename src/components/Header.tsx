import Image from 'next/image';

type Props = {
    logo: string,
    info: string,
}

const Header = ({ logo, info }: Props) => {
    return (
        <div className="header p-4 bg-slate-100 rounded-lg mt-10">
            <div className="flex space-x-6">
                <Image src={logo} width={80} height={80} alt="" />
                <div className="flex justify-center items-center font-semibold text-slate-600">
                    {info}
                </div>
            </div>
        </div>
    );
};

export default Header;
