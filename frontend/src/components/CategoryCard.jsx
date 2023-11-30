import CategoryPic from '../assets/category/category-one.png'

const CategoryCard = () => {
    return (
        <div className="card card-side bg-base-100 shadow-xl cursor-pointer">
            <figure className='p-3'><img src={CategoryPic} alt="Movie" className='w-12'/></figure>
            <div className="p-3">
                <h2 className="font-bold">Family studio</h2>
                <p className='text-xs text-gray-500'>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    )
}

export default CategoryCard