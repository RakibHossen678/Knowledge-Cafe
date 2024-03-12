import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className="border-b-2  flex justify-between items-center pb-4">
            <h1 className='lg:text-4xl text-3xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
            
        </div>
    );
};

export default Header;