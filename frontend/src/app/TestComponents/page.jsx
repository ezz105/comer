'use client'
import React, { useState } from 'react'
import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import Card from '@/components/common/Card'
import Loading from '@/components/common/Loading'
import Modal from '@/components/common/Modal'
import Table from '@/components/common/Table'
import Badge from '@/components/common/Badge'
import Tooltip from '@/components/common/Tooltip'
import SearchBar from '@/components/common/SearchBar'
import RatingStars from '@/components/common/RatingStars'
import ImageCarousel from '@/components/common/ImageCarousel'
import Notification from '@/components/common/Notification'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import Range from '@/components/common/Range'
import Dropdown from '@/components/common/Dropdown'
import CategoryCard from '@/components/common/CategoryCard'
import Tags from '@/components/common/Tags'
import Avatar from '@/components/common/Avatar'
import Alert from '@/components/common/Alert'
import ProgressBar from '@/components/common/ProgressBar'

import {
    FaMousePointer,
    FaEdit,
    FaCreditCard,
    FaCircleNotch,
    FaExpandArrowsAlt,
    FaSearch,
    FaUser, FaLock,FaTag
} from 'react-icons/fa';

import { BiTable, BiListMinus } from 'react-icons/bi';
import { MdVerified, MdLinearScale, MdCategory } from 'react-icons/md';
import { RiInformationLine } from 'react-icons/ri';
import { BsStarHalf } from 'react-icons/bs';
import { AiOutlinePicture, AiOutlineLineChart } from 'react-icons/ai';
import { IoNotificationsOutline, IoWarningOutline } from 'react-icons/io5';
import { HiChevronDown } from 'react-icons/hi';
import { CgProfile } from 'react-icons/cg';


const TestComponentsPage = () => {
    /*############### */
    /* INPUT */
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [search, setSearch] = useState('')
    const [disabledValue, setDisabledValue] = useState('Disabled input')
    const [errorValue, setErrorValue] = useState('')

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorValue('Invalid email format');
        } else {
            setErrorValue('');
        }
    };
    const toggleDisabled = () => {
        setDisabledValue(prevState => !prevState);
    };

    /*############### */
    /* Range */
    const [value1, setValue1] = useState(50) // القيمة الافتراضية
    const [value2, setValue2] = useState(20) // القيمة الافتراضية
    const [value3, setValue3] = useState(80) // القيمة الافتراضية

    const handleRangeChange1 = e => setValue1(e.target.value)
    const handleRangeChange2 = e => setValue2(e.target.value)
    const handleRangeChange3 = e => setValue3(e.target.value)



    /*############### */
    /* Range */
    const [selectedOption, setSelectedOption] = useState(null)
    const [selectedOption2, setSelectedOption2] = useState(null)
    const [selectedOption3, setSelectedOption3] = useState(null)

    const handleSelect = option => {
        setSelectedOption(option)
    }

    const handleSelect2 = option => {
        setSelectedOption2(option)
    }

    const handleSelect3 = option => {
        setSelectedOption3(option)
    }


    /*############### */
    const [modalOpen, setModalOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [rating, setRating] = useState(3)
    const [rangeValue, setRangeValue] = useState(50)
    const [progress, setProgress] = useState(0);

    const incrementProgress = () => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    };
    const handleRangeChange = (e) => {
        setRangeValue(Number(e.target.value));
    };
    const handleTagClick = tag => {
        console.log(`Tag clicked: ${tag}`)
    }

    const handleClose = () => {
        console.log('Alert closed!')
    }
    const tags = ['React', 'Next.js', 'Tailwind', 'JavaScript']

    return (
      <div className="p-6 min-h-screen space-y-12 dark:bg-dark-background dark:text-dark-text bg-light-background text-light-text">
        {/* Top Navigation Icons */}
        <nav className="sticky top-18 left-0 w-full bg-white dark:bg-dark-background shadow-md z-50">
          <div className="flex justify-center space-x-4 py-3">
            <a href="#alert" className="text-lg hover:text-blue-500"><IoWarningOutline title="Alert" /></a>
            <a href="#button" className="text-lg hover:text-blue-500"><FaMousePointer title="Button" /></a>
            <a href="#input" className="text-lg hover:text-blue-500"><FaEdit title="Input" /></a>
            <a href="#card" className="text-lg hover:text-blue-500"><FaCreditCard title="Card" /></a>
            <a href="#loading" className="text-lg hover:text-blue-500"><FaCircleNotch title="Loading" /></a>
            <a href="#modal" className="text-lg hover:text-blue-500"><FaExpandArrowsAlt title="Modal" /></a>
            <a href="#table" className="text-lg hover:text-blue-500"><BiTable title="Table" /></a>
            <a href="#badge" className="text-lg hover:text-blue-500"><MdVerified title="Badge" /></a>
            <a href="#tooltip" className="text-lg hover:text-blue-500"><RiInformationLine title="Tooltip" /></a>
            <a href="#searchbar" className="text-lg hover:text-blue-500"><FaSearch title="Search Bar" /></a>
            <a href="#ratingstars" className="text-lg hover:text-blue-500"><BsStarHalf title="Rating Stars" /></a>
            <a href="#imagecarousel" className="text-lg hover:text-blue-500"><AiOutlinePicture title="Image Carousel" /></a>
            <a href="#notification" className="text-lg hover:text-blue-500"><IoNotificationsOutline title="Notification" /></a>
            <a href="#breadcrumbs" className="text-lg hover:text-blue-500"><BiListMinus title="Breadcrumbs" /></a>
            <a href="#range" className="text-lg hover:text-blue-500"><MdLinearScale title="Range" /></a>
            <a href="#dropdown" className="text-lg hover:text-blue-500"><HiChevronDown title="Dropdown" /></a>
            <a href="#categorycard" className="text-lg hover:text-blue-500"><MdCategory title="Category Card" /></a>
            <a href="#tags" className="text-lg hover:text-blue-500"><FaTag title="Tags" /></a>
            <a href="#avatar" className="text-lg hover:text-blue-500"><CgProfile title="Avatar" /></a>
            <a href="#alert" className="text-lg hover:text-blue-500"><IoWarningOutline title="Alert" /></a>
            <a href="#progressbar" className="text-lg hover:text-blue-500"><AiOutlineLineChart title="ProgressBar" /></a>
          </div>
        </nav>
        {/* الأقسام في الصفحة */}{' '}
        <h1 className="text-3xl font-extrabold text-center mb-12">Test Components Showcase</h1>
        {/* Alert */}
        <section id="alert" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Alert</h2>
          <p className="text-gray-500 mb-6">
            Alerts are used to display important information or warnings that require the
            user&lsquo;s attention.
          </p>
          <Alert message="This is an info alert." type="info" dismissible />
          <Alert message="Warning! Check your input." type="warning" dismissible />
          <Alert message="Success! Your action was completed." type="success" autoClose={5000} />
        </section>
        <section className="p-6 bg-light-background dark:bg-dark-background rounded-lg shadow-md space-y-6">
          <h2 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">
            Alert Component Showcase
          </h2>
          <p className="text-muted mb-6">
            The `Alert` component displays notifications with customizable options for type,
            dismissal, and auto-close.
          </p>

          <div className="space-y-4">
            {/* الحالة 1: تنبيه معلومات */}
            <Alert message="This is an info alert." type="info" />
            <p className="text-sm text-muted">
              <strong>Case 1:</strong> Info alert (default type).
            </p>

            {/* الحالة 2: تنبيه نجاح */}
            <Alert message="Action was successful!" type="success" />
            <p className="text-sm text-muted">
              <strong>Case 2:</strong> Success alert.
            </p>

            {/* الحالة 3: تنبيه تحذير */}
            <Alert message="This is a warning alert!" type="warning" />
            <p className="text-sm text-muted">
              <strong>Case 3:</strong> Warning alert.
            </p>

            {/* الحالة 4: تنبيه خطير مع الإغلاق اليدوي */}
            <Alert
              message="Something went wrong!"
              type="danger"
              dismissible={true}
              onClose={handleClose}
            />
            <p className="text-sm text-muted">
              <strong>Case 4:</strong> Danger alert with manual dismissal.
            </p>

            {/* الحالة 5: تنبيه معلومات مع الإغلاق التلقائي */}
            <Alert
              message="This alert will close automatically after 3 seconds."
              type="info"
              autoClose={3000}
            />
            <p className="text-sm text-muted">
              <strong>Case 5:</strong> Auto-close info alert.
            </p>

            {/* الحالة 6: تنبيه نجاح مع الإغلاق اليدوي والتلقائي */}
            <Alert
              message="Success alert with both manual and auto-close."
              type="success"
              dismissible={true}
              autoClose={5000}
              onClose={handleClose}
            />
            <p className="text-sm text-muted">
              <strong>Case 6:</strong> Success alert with manual and auto-close.
            </p>
          </div>
        </section>
        <hr className="my-8 border-t-2 border-gray-200" />
        {/* Button */}
        {/* Button Section */}
        <section
          id="button"
          className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border"
        >
          {/* العنوان الرئيسي للقسم */}
          <h2 className="text-2xl font-semibold mb-4">Button</h2>

          {/* شرح عام عن الأزرار */}
          <p className="mb-6">
            A button element allows users to perform actions like submitting a form, confirming
            selections, etc. Buttons can have different styles, sizes, and behaviors, including
            being disabled.
          </p>

          {/* زر أساسي - هذا هو الزر الافتراضي */}
          <Button onClick={() => alert('Primary Button Clicked!')}>Primary Button</Button>
          <p>This is a primary button. It&lsquo;s used for the most important actions.</p>
          {/* زر أساسي: يُستخدم عادة للأفعال الرئيسية مثل "إرسال" أو "تأكيد". */}

          {/* زر ثانوي - مع حجم صغير */}
          <Button variant="secondary" size="sm">
            Secondary Button
          </Button>
          <p>
            This is a secondary button. It is often used for actions that are not as important as
            the primary action.
          </p>
          {/* زر ثانوي: يُستخدم للأفعال الأقل أهمية مثل "إلغاء" أو "إعادة ضبط" */}

          {/* زر خطر مع حجم كبير ومعطل */}
          <Button variant="danger" size="lg" disabled>
            Disabled Danger Button
          </Button>
          <p>
            This is a danger button. It&apos;s typically used for actions that could have serious
            consequences, like deleting something.
          </p>
          <p>This one is disabled, meaning users cannot interact with it.</p>
          {/* زر خطر: يُستخدم للأفعال التي قد تكون حساسة أو تتطلب الحذر مثل "حذف" أو "إلغاء" */}
          {/* هذا الزر معطل، مما يعني أن المستخدمين لا يمكنهم التفاعل معه. */}

          {/* زر مع أيقونة */}
          <Button variant="primary" icon={<span>🔥</span>}>
            Button with Icon
          </Button>
          <p>
            This button has an icon before the text. Icons can provide additional context and
            improve user experience.
          </p>
          {/* زر مع أيقونة: يضيف الأيقونة قبل النص، مما يوفر سياقًا إضافيًا ويُحسن تجربة المستخدم. */}
        </section>
        <hr className="my-8 border-t-2 border-light-border dark:border-dark-border" />
        {/* Input */}
        <section
          id="input-tests"
          className="p-6 bg-white dark:bg-dark-background rounded-lg shadow-md border border-light-border dark:border-dark-border"
        >
          <h2 className="text-2xl font-semibold mb-6">Input Component Tests</h2>

          {/* الحالة الأساسية */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold">1. Basic Input</h3>
            <p className="text-sm mb-4">
              This is a simple input field for collecting basic text data.
            </p>
            <Input
              label="Name"
              placeholder="Enter your name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          {/* الإدخال مع أيقونة */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold">2. Input with Icon</h3>
            <p className="text-sm mb-4">
              An input field with an icon, used for visual context like a username.
            </p>
            <Input
              label="Username"
              placeholder="Enter your username"
              value={name}
              onChange={e => setName(e.target.value)}
              icon={FaUser}
            />
          </div>

          {/* الإدخال مع الخطأ */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold">3. Input with Error</h3>
            <p className="text-sm mb-4">
              Displays an error message and icon when validation fails.
            </p>
            <Input
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChange={e => {
                setEmail(e.target.value)
                validateEmail(e.target.value) // Validate as user types
              }}
              error={errorValue}
            />
          </div>

          {/* إدخال معطل */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold">4. Disabled Input</h3>
            <p className="text-sm mb-4">
              An input field that is disabled and not editable by the user.
            </p>
            <Input
              label="Email"
              placeholder="Enter your email"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              disabled={disabledValue}
            />

            <button
              className="mt-4 p-2 bg-light-primary text-white rounded"
              onClick={toggleDisabled}
            >
              {disabledValue ? 'Enable Input' : 'Disable Input'}
            </button>
          </div>

          {/* إدخال كلمة المرور */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold">5. Password Input</h3>
            <p className="text-sm mb-4">
              An input field for entering sensitive data like passwords.
            </p>
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              icon={FaLock}
            />
          </div>

          {/* إدخال بحث */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold">6. Search Input</h3>
            <p className="text-sm mb-4">An input field optimized for search functionality.</p>
            <Input
              label="Search"
              type="search"
              placeholder="Search for something..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </section>
        {/* Card Section */}
        <section
          id="card"
          className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border"
        >
          {/* العنوان الرئيسي للقسم */}
          <h2 className="text-2xl font-semibold mb-4">Card</h2>

          {/* شرح عام عن الأشرطة */}
          <p className="mb-6">
            Cards are used to display content like product details, images, and actions in a compact
            way. Each card can include an image, title, description, categories, badges, and
            interactive actions.
          </p>

          <div className="flex flex-col gap-6">
            {/* Card with full details (مع صورة، عنوان، وصف، فئات، وشارات) */}
            <Card
              id="1"
              title="Elegant Handbag"
              description="This handcrafted handbag is made from premium leather and designed to last."
              image="/test1.jpg"
              categories={[
                { text: 'Fashion', color: 'primary' },
                { text: 'Handbags', color: 'secondary' },
                { text: 'Bags', color: 'accent' },
              ]}
              badges={[
                { text: 'New Arrival', variant: 'primary' },
                { text: 'Trending', variant: 'secondary' },
              ]}
            />
            <p>This card includes an image, title, description, categories, and badges.</p>

            {/* Card without badges (بدون شارات) */}
            <Card
              id="2"
              title="Vintage Lamp"
              description="Add a touch of vintage charm to your home with this exquisite lamp."
              image="/test1.jpg"
              categories={[{ text: 'Decor', color: 'primary' }]}
            />
            <p>This card has a title, description, and categories but no badges.</p>

            {/* Card with multiple badges (مع شارات متعددة) */}
            <Card
              id="3"
              title="Artistic Painting"
              description="An original painting to enhance the elegance of any space."
              image="/test2.jpg"
              categories={[
                { text: 'Art', color: 'red' },
                { text: 'Painting', color: 'yellow' },
              ]}
              badges={[
                { text: 'Limited Edition', variant: 'warning' },
                { text: 'Best Seller', variant: 'success' },
                { text: 'Handcrafted', variant: 'accent' },
              ]}
            />
            <p>This card includes multiple badges along with categories, title, and description.</p>

            {/* Card with no image (بدون صورة) */}
            <Card
              id="4"
              title="Elegant Sofa"
              description="A comfortable and stylish sofa that complements modern interiors."
              categories={[
                { text: 'Furniture', color: 'primary' },
                { text: 'Sofa', color: 'secondary' },
              ]}
              badges={[{ text: 'Luxury', variant: 'dark' }]}
            />
            <p>This card has no image but contains a title, description, categories, and badges.</p>

            {/* Card with long title and description (عنوان ووصف طويلين) */}
            <Card
              id="5"
              title="Handmade Jewelry Box with Exquisite Detailing and Premium Craftsmanship"
              description="This jewelry box is handcrafted with intricate details, providing a luxurious storage solution for your precious accessories. Made from sustainable materials."
              image="/test3.jpg"
              categories={[{ text: 'Jewelry', color: 'primary' }]}
              badges={[
                { text: 'Eco-Friendly', variant: 'success' },
                { text: 'Artisan', variant: 'primary' },
              ]}
            />
            <p>This card has a long title and description with an image, categories, and badges.</p>

            {/* Card with dark mode testing (اختبار الوضع الداكن) */}
            <Card
              id="6"
              title="Cozy Blanket"
              description="Wrap yourself in warmth and comfort with this ultra-soft blanket."
              image="/test1.jpg"
              categories={[
                { text: 'Home', color: 'primary' },
                { text: 'Bedding', color: 'secondary' },
              ]}
              badges={[{ text: 'Seasonal', variant: 'accent' }]}
            />
            <p>
              This card demonstrates dark mode with a title, description, categories, badges, and an
              image.
            </p>
          </div>
        </section>
        <hr className="my-8 border-t-2 border-light-border dark:border-dark-border" />
        {/* Card */}
        <section
          id="card"
          className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border"
        >
          <h2 className="text-2xl font-semibold mb-4">Card</h2>
          <p className="mb-6">
            Cards are used to display content like product details, images, and actions in a compact
            way.
          </p>
          <div className="flex justify-center items-center flex-wrap gap-6">
            {/* Card with full details */}
            <Card
              id="1"
              title="Elegant Handbag"
              description="This handcrafted handbag is made from premium leather and designed to last."
              image="/test1.jpg"
              categories={[
                { text: 'Fashion', color: 'primary' },
                { text: 'Handbags', color: 'secondary' },
                { text: 'Bags', color: 'accent' },
              ]}
              badges={[
                { text: 'New Arrival', variant: 'primary' },
                { text: 'Trending', variant: 'secondary' },
              ]}
            />

            {/* Card without badges */}
            <Card
              id="2"
              title="Vintage Lamp"
              description="Add a touch of vintage charm to your home with this exquisite lamp."
              image="/test1.jpg"
              categories={[{ text: 'Decor', color: 'primary' }]}
            />

            {/* Card with multiple badges */}
            <Card
              id="3"
              title="Artistic Painting"
              description="An original painting to enhance the elegance of any space."
              image="/test2.jpg"
              categories={[
                { text: 'Art', color: 'red' },
                { text: 'Painting', color: 'yellow' },
              ]}
              badges={[
                { text: 'Limited Edition', variant: 'warning' },
                { text: 'Best Seller', variant: 'success' },
                { text: 'Handcrafted', variant: 'accent' },
              ]}
            />

            {/* Card with no image */}
            <Card
              id="4"
              title="Elegant Sofa"
              description="A comfortable and stylish sofa that complements modern interiors."
              categories={[
                { text: 'Furniture', color: 'primary' },
                { text: 'Sofa', color: 'secondary' },
              ]}
              badges={[{ text: 'Luxury', variant: 'dark' }]}
            />

            {/* Card with long title and description */}
            <Card
              id="5"
              title="Handmade Jewelry Box with Exquisite Detailing and Premium Craftsmanship"
              description="This jewelry box is handcrafted with intricate details, providing a luxurious storage solution for your precious accessories. Made from sustainable materials."
              image="/test3.jpg"
              categories={[{ text: 'Jewelry', color: 'primary' }]}
              badges={[
                { text: 'Eco-Friendly', variant: 'success' },
                { text: 'Artisan', variant: 'primary' },
              ]}
            />

            {/* Card with dark mode testing */}
            <Card
              id="6"
              title="Cozy Blanket"
              description="Wrap yourself in warmth and comfort with this ultra-soft blanket."
              image="/test1.jpg"
              categories={[
                { text: 'Home', color: 'primary' },
                { text: 'Bedding', color: 'secondary' },
              ]}
              badges={[{ text: 'Seasonal', variant: 'accent' }]}
            />
          </div>
        </section>
        <hr className="my-8 border-t-2 border-light-border dark:border-dark-border" />
        {/* Loading */}
        <section
          id="loading"
          className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border"
        >
          <h2 className="text-2xl font-semibold mb-4">Loading</h2>
          <p className="mb-6">
            Loading components provide visual feedback when data is being fetched or a process is
            taking time. These loading indicators can vary in size, speed, and color to fit the
            needs of the interface.
          </p>

          <div className="space-y-6">
            {/* Loading with Small Size */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Small Size (sm)</h3>
              <p className="text-gray-600 mb-4">
                This size is ideal for inline loading indicators or small buttons.
              </p>
              <Loading size="sm" color="#006D77" speed="normal" />
            </div>

            {/* Loading with Medium Size */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Medium Size (md)</h3>
              <p className="text-gray-600 mb-4">
                The default size for most loading indicators, often used for content loading in
                small sections.
              </p>
              <Loading size="md" color="#006D77" speed="normal" />
            </div>

            {/* Loading with Large Size */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Large Size (lg)</h3>
              <p className="text-gray-600 mb-4">
                This size is useful for loading indicators in large sections or entire page loads.
              </p>
              <Loading size="lg" color="#006D77" speed="normal" />
            </div>

            {/* Loading with Slow Speed */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Slow Speed</h3>
              <p className="text-gray-600 mb-4">
                A slow animation gives users a sense that a process is taking time, ideal for
                lengthy processes.
              </p>
              <Loading size="md" color="#006D77" speed="slow" />
            </div>

            {/* Loading with Fast Speed */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Fast Speed</h3>
              <p className="text-gray-600 mb-4">
                A fast animation for processes that should feel quick, ideal for shorter tasks or
                loading states.
              </p>
              <Loading size="md" color="#006D77" speed="fast" />
            </div>

            {/* Loading with Custom Color */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Custom Color</h3>
              <p className="text-gray-600 mb-4">
                Custom colors can be used to match the branding or the color scheme of your
                application.
              </p>
              <Loading size="md" color="green" speed="normal" />
            </div>
          </div>
        </section>
        <hr className="my-8 border-t-2 border-light-border dark:border-dark-border" />
        {/* Modal */}
        <section
          id="modal"
          className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border"
        >
          <h2 className="text-2xl font-semibold mb-4">Modal</h2>
          <p className="mb-6">
            Modals are pop-up windows that can show additional content without navigating away from
            the current page.
          </p>
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          <Modal isOpen={modalOpen} title="Modal Title" onClose={() => setModalOpen(false)}>
            This is the modal content.
          </Modal>
        </section>
        <hr className="my-8 border-t-2 border-light-border dark:border-dark-border" />
        {/* Table */}
        <section id="table" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Table</h2>
          <p className="text-gray-500 mb-6">
            Tables are used to display structured data in rows and columns, such as product lists or
            user data.
          </p>
          <Table
            headers={['Name', 'Price', 'Stock']}
            rows={[
              ['Handcrafted Vase', '$20', 'In Stock'],
              ['Wool Scarf', '$15', 'Out of Stock'],
              ['Handcrafted Vase', '$20', 'In Stock'],
              ['Wool Scarf', '$15', 'Out of Stock'],
              ['Handcrafted Vase', '$20', 'In Stock'],
              ['Wool Scarf', '$15', 'Out of Stock'],
              ['Handcrafted Vase', '$20', 'In Stock'],
              ['Wool Scarf', '$15', 'Out of Stock'],
            ]}
          />
        </section>
        <hr className="my-8 border-t-2 border-light-border dark:border-dark-border" />
        {/* Badge */}
        <section
          id="badge"
          className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border"
        >
          <h2 className="text-2xl font-semibold mb-4">Badge</h2>
          <p className="mb-6">
            Badges are used to provide labels or status indicators, such as showing availability or
            notifications.
          </p>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Primary Badge</h3>
            <Badge text="Primary" variant="primary" size="md" />
            <p className="text-sm text-gray-500">
              A neutral or default badge, usually for general information or status.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Secondary Badge</h3>
            <Badge text="Secondary" variant="secondary" size="md" />
            <p className="text-sm text-gray-500">
              A badge with a lighter color for secondary information or less prominent status.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Success Badge</h3>
            <Badge text="Success" variant="success" size="md" />
            <p className="text-sm text-gray-500">
              A green badge indicating success, confirmation, or something positive.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Danger Badge</h3>
            <Badge text="Danger" variant="danger" size="md" />
            <p className="text-sm text-gray-500">
              A red badge used for alerts, warnings, or negative status like &quot;Out of
              Stock&quot;.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Warning Badge</h3>
            <Badge text="Warning" variant="warning" size="md" />
            <p className="text-sm text-gray-500">
              A yellow badge used to indicate caution, something that requires attention.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Info Badge</h3>
            <Badge text="Info" variant="info" size="md" />
            <p className="text-sm text-gray-500">
              A blue badge typically used for informational purposes or additional details.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Small Badge</h3>
            <Badge text="Small" size="sm" variant="primary" />
            <p className="text-sm text-gray-500">
              A small badge used for compact indicators or minor information.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Large Badge</h3>
            <Badge text="Large" size="lg" variant="primary" />
            <p className="text-sm text-gray-500">
              A larger badge for more prominent information or status indication.
            </p>
          </div>
        </section>
        <hr className="my-8 border-t-2 border-light-border dark:border-dark-border" />
        {/* Tooltip */}
        <section
          id="tooltip"
          className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border"
        >
          <h2 className="text-2xl font-semibold mb-4">Tooltip</h2>
          <p className="mb-6">
            Tooltips provide additional information when hovering over an element, offering context
            or clarification.
          </p>
          <div className="grid justify-center mb-6">
            <div className=" mb-6">
              <h3 className="font-semibold mb-2">Top Position Tooltip</h3>
              <Tooltip text="This is a tooltip" position="top" color="gray">
                <Button>Hover over me</Button>
              </Tooltip>
              <p className="text-sm text-gray-500">
                This tooltip appears above the button when hovered.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Bottom Position Tooltip</h3>
              <Tooltip text="This is a tooltip" position="bottom" color="blue">
                <Button>Hover over me</Button>
              </Tooltip>
              <p className="text-sm text-gray-500">
                This tooltip appears below the button when hovered.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Left Position Tooltip</h3>
              <Tooltip text="This is a tooltip" position="left" color="green">
                <Button>Hover over me</Button>
              </Tooltip>
              <p className="text-sm text-gray-500">
                This tooltip appears to the left of the button when hovered.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Right Position Tooltip</h3>
              <Tooltip text="This is a tooltip" position="right" color="red">
                <Button>Hover over me</Button>
              </Tooltip>
              <p className="text-sm text-gray-500">
                This tooltip appears to the right of the button when hovered.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Gray Color Tooltip</h3>
              <Tooltip text="This is a tooltip" position="top" color="gray">
                <Button>Hover over me</Button>
              </Tooltip>
              <p className="text-sm text-gray-500">A neutral gray tooltip with a subtle design.</p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Blue Color Tooltip</h3>
              <Tooltip text="This is a tooltip" position="bottom" color="blue">
                <Button>Hover over me</Button>
              </Tooltip>
              <p className="text-sm text-gray-500">
                A blue tooltip that adds a vibrant color to your design.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Green Color Tooltip</h3>
              <Tooltip text="This is a tooltip" position="left" color="green">
                <Button>Hover over me</Button>
              </Tooltip>
              <p className="text-sm text-gray-500">
                A green tooltip, perfect for success or positive actions.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Red Color Tooltip</h3>
              <Tooltip text="This is a tooltip" position="right" color="red">
                <Button>Hover over me</Button>
              </Tooltip>
              <p className="text-sm text-gray-500">
                A red tooltip used for warnings or critical information.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Yellow Color Tooltip</h3>
              <Tooltip text="This is a tooltip" position="top" color="yellow">
                <Button>Hover over me</Button>
              </Tooltip>
              <p className="text-sm text-gray-500">
                A bright yellow tooltip that catches the user&apos;s attention.
              </p>
            </div>
          </div>
        </section>
        <hr className="my-8 border-t-2 border-light-border dark:border-dark-border" />
        {/* SearchBar */}
        <section
          id="searchbar"
          className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border"
        >
          <h2 className="text-2xl font-semibold mb-4">SearchBar</h2>
          <p className="mb-6">
            Search bars allow users to type keywords and filter content or find specific items.
          </p>
          <SearchBar
            placeholder="Search items..."
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onSearch={() => alert('Search triggered')}
          />
        </section>
        {/* SearchBar */}
        <section
          id="searchbar"
          className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border"
        >
          <h2 className="text-2xl font-semibold mb-4">SearchBar</h2>
          <p className="mb-6">
            Search bars allow users to type keywords and filter content or find specific items.
          </p>
          <SearchBar
            placeholder="Search items..."
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onSearch={() => alert('Search triggered')}
          />
        </section>
        <hr className="my-8 border-t-2 border-light-border dark:border-dark-border" />
        {/* RatingStars */}
        <section
          id="ratingstars"
          className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border"
        >
          <h2 className="text-2xl font-semibold mb-4">RatingStars</h2>
          <p className="mb-6">
            Star ratings provide users with a simple way to rate items or services based on their
            experiences.
          </p>
          <RatingStars rating={rating} onRate={setRating} />
        </section>
        <hr className="my-8 border-t-2 border-light-border dark:border-dark-border" />
        {/* ImageCarousel */}
        <section
          id="imagecarousel"
          className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border"
        >
          <h2 className="text-2xl font-semibold mb-4">ImageCarousel</h2>
          <p className="mb-6">
            Carousels allow users to swipe through a series of images or content, usually for
            showcasing products or galleries.
          </p>
          <ImageCarousel images={['/test1.jpg', '/test2.jpg', '/test3.jpg']} />
        </section>
        <hr className="my-8 border-t-2 border-light-border dark:border-dark-border" />
        {/* Notification */}
        <section
          id="notification"
          className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border"
        >
          <h2 className="text-2xl font-semibold mb-4">Notification</h2>
          <p className="mb-6">
            Notifications inform users of important events or actions that require attention.
          </p>
          <Notification message="New product added!" type="success" />
          <Notification message="Product out of stock" type="error" />
        </section>
        <hr className="my-8 border-t-2 border-light-border dark:border-dark-border" />
        {/* Breadcrumbs */}
        <section
          id="breadcrumbs"
          className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border"
        >
          <h2 className="text-2xl font-semibold mb-4">Breadcrumbs</h2>
          <p className="mb-6">
            Breadcrumbs help users understand their current position within a website or application
            hierarchy.
          </p>
          <Breadcrumbs items={['Home', 'Shop', 'Product']} />
        </section>
        <section
          id="breadcrumbs"
          className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border"
        >
          <h2 className="text-2xl font-semibold mb-4">Breadcrumbs</h2>
          <p className="mb-6">
            Breadcrumbs help users understand their current location within a website or
            application.
          </p>

          {/* حالة Breadcrumbs عادية */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Standard Breadcrumbs</h3>
            <p className="text-sm text-gray-500">
              تُستخدم خريطة التنقل هذه لإظهار التسلسل الهرمي للأقسام في الموقع.
            </p>
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Category', href: '/category' },
                { label: 'Product', href: '/product' },
              ]}
            />
          </div>

          {/* حالة Breadcrumbs مع صفحة حالياً */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Current Page Breadcrumbs</h3>
            <p className="text-sm text-gray-500">
              في هذه الحالة، يتم تمييز الصفحة الحالية التي لا يمكن التنقل إليها.
            </p>
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Category', href: '/category' },
                { label: 'Product', href: '/product' },
              ]}
            />
          </div>

          {/* حالة Breadcrumbs فارغة */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Empty Breadcrumbs</h3>
            <p className="text-sm text-gray-500">هذه حالة عندما لا توجد خريطة للتنقل على الصفحة.</p>
            <Breadcrumbs items={[]} />
          </div>
        </section>
        <hr className="my-8 border-t-2 border-light-border dark:border-dark-border" />
        {/* Range */}
        <section
          id="range"
          className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border"
        >
          <h2 className="text-2xl font-semibold mb-4">Range</h2>
          <p className="mb-6">
            Range inputs allow users to select a value from a continuous spectrum, like setting
            volume or price filters.
          </p>
          <Range min={0} max={100} value={rangeValue} onChange={handleRangeChange} step={5} />
        </section>
        <section
          id="range"
          className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border"
        >
          <h2 className="text-2xl font-semibold mb-4">Range</h2>
          <p className="mb-6">
            Range inputs allow users to select a value from a continuous spectrum, like setting
            volume or price filters.
          </p>

          {/* الحالة 1: نطاق عادي */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Normal Range (0 to 100)</h3>
            <Range min={0} max={100} value={rangeValue} onChange={handleRangeChange} />
          </div>

          {/* الحالة 2: نطاق مع خطوات محددة */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Range with Steps (0 to 100, Step 5)</h3>
            <Range min={0} max={100} value={rangeValue} onChange={handleRangeChange} step={5} />
          </div>

          {/* الحالة 3: نطاق في الوضع الداكن */}
          <div className="mb-8 dark">
            <h3 className="text-xl font-semibold mb-4">Dark Mode Range</h3>
            <Range min={0} max={100} value={rangeValue} onChange={handleRangeChange} step={10} />
          </div>

          {/* الحالة 4: عرض قيمة متغيرة */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Range with Dynamic Value Display</h3>
            <Range min={0} max={100} value={rangeValue} onChange={handleRangeChange} step={10} />
            <div className="mt-4">
              <span className="text-lg font-semibold">Selected Value: {rangeValue}</span>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border">
          <h2 className="text-2xl font-semibold mb-4">Range Example 1: Default Range</h2>
          <p className="mb-6">This is a default range input with values between 0 and 100.</p>
          <Range min={0} max={100} value={value1} onChange={handleRangeChange1} step={5} />
        </section>
        <section className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border">
          <h2 className="text-2xl font-semibold mb-4">
            Range Example 2: Custom Range with Step of 10
          </h2>
          <p className="mb-6">
            This range has a custom step value of 10 between the range of 0 and 100.
          </p>
          <Range min={0} max={100} value={value2} onChange={handleRangeChange2} step={10} />
        </section>
        <section className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border">
          <h2 className="text-2xl font-semibold mb-4">Range Example 3: Customized Min and Max</h2>
          <p className="mb-6">
            This range has a custom minimum of 50 and maximum of 150, with a default value of 80.
          </p>
          <Range min={50} max={150} value={value3} onChange={handleRangeChange3} step={5} />
        </section>
        <section className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border">
          <h2 className="text-2xl font-semibold mb-4">Range Example 4: Value Display</h2>
          <p className="mb-6">
            Here, the current value is displayed alongside the range input for a better user
            experience.
          </p>
          <Range min={0} max={100} value={value1} onChange={handleRangeChange1} step={1} />
        </section>
        <hr className="my-8 border-t-2 border-light-border dark:border-dark-border" />
        {/* Dropdown */}
        {/* <section
                id="dropdown"
                className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border"
            >
                <h2 className="text-2xl font-semibold mb-4">Dropdown</h2>
                <p className="mb-6">
                    Dropdowns allow users to select an option from a list without taking up much space.
                </p>
                <Dropdown options={['Option 1', 'Option 2', 'Option 3']} />
            </section> */}
        <section
          id="dropdown"
          className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border"
        >
          <h2 className="text-2xl font-semibold mb-4">Dropdown Example 1: Default Dropdown</h2>
          <p className="mb-6">
            This is a basic dropdown with a list of options. Select an option from the dropdown.
          </p>
          <Dropdown options={['Option 1', 'Option 2', 'Option 3']} onSelect={handleSelect} />
          <p className="mt-4">Selected Option: {selectedOption}</p>
        </section>
        <section className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border">
          <h2 className="text-2xl font-semibold mb-4">
            Dropdown Example 2: Dropdown with Placeholder
          </h2>
          <p className="mb-6">
            This dropdown includes a placeholder text when no option is selected.
          </p>
          <Dropdown
            options={['Option 1', 'Option 2', 'Option 3']}
            onSelect={handleSelect2}
            placeholder="Choose an option"
          />
          <p className="mt-4">Selected Option: {selectedOption2}</p>
        </section>
        <section className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border">
          <h2 className="text-2xl font-semibold mb-4">Dropdown Example 3: Custom Label</h2>
          <p className="mb-6">This dropdown includes a label for better user experience.</p>
          <Dropdown
            options={['Option 1', 'Option 2', 'Option 3']}
            onSelect={handleSelect3}
            label="Select an Option"
          />
          <p className="mt-4">Selected Option: {selectedOption3}</p>
        </section>
        <hr className="my-8 border-t-2 border-light-border dark:border-dark-border" />
        {/* CategoryCard */}
        <section
          id="categorycard"
          className="bg-light-background dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border"
        >
          <h2 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">
            CategoryCard
          </h2>
          <p className="mb-6 text-muted">
            Category cards are used to display categories of products or sections within the app.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* الحالة الأولى */}
            <CategoryCard
              title="Elegant Handcrafted Vase"
              description="A beautifully designed vase made with care by artisans."
              image="/test1.jpg"
              onClick={() => console.log('Vase card clicked!')}
            />

            {/* الحالة الثانية */}
            <CategoryCard
              title="Mystery Box"
              description="Explore the unknown with our exclusive mystery box!"
              onClick={() => console.log('Mystery Box clicked!')}
            />

            {/* الحالة الثالثة */}
            <CategoryCard
              title="Luxury Furniture Collection"
              description="Discover a wide range of luxury furniture collections that are designed to bring comfort and style to your living space. Perfect for modern and contemporary designs."
              image="/test2.jpg"
              onClick={() => console.log('Furniture card clicked!')}
            />
          </div>
        </section>
        <section
          id="categorycard"
          className="bg-light-background dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border"
        >
          <h2 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">
            CategoryCard
          </h2>
          <p className="mb-6 text-muted">
            Category cards are used to display categories of products or sections within the app.
          </p>
          <h3 className="text-3xl md:text-5xl font-bold text-center mb-12">Top Categories</h3>

          {/* الحاوية */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 p-8">
            {/* الحالة 1: الحالة العادية */}
            <div className="space-y-4 pt-[100px]">
              <CategoryCard
                title="Furniture"
                image="/test5.jpg"
                description="Explore our premium furniture collection with modern designs."
                onClick={() => alert('Furniture category clicked!')}
              />
              <p className="text-center text-sm text-light-muted dark:text-dark-muted">
                <strong>الحالة 1:</strong> الحالة العادية (جميع البيانات متوفرة).
              </p>
            </div>

            {/* الحالة 2: بدون صورة */}
            <div className="space-y-4 pt-[100px]">
              <CategoryCard
                title="Books"
                description="Discover a variety of books across different genres."
                onClick={() => alert('Books category clicked!')}
              />
              <p className="text-center text-sm text-light-muted dark:text-dark-muted">
                <strong>الحالة 2:</strong> بدون صورة (الدائرة ستكون فارغة).
              </p>
            </div>

            {/* الحالة 3: بدون وصف */}
            <div className="space-y-4 pt-[100px]">
              <CategoryCard
                title="Electronics"
                image="/test1.jpg"
                onClick={() => alert('Electronics category clicked!')}
              />
              <p className="text-center text-sm text-light-muted dark:text-dark-muted">
                <strong>الحالة 3:</strong> بدون وصف (العنوان فقط).
              </p>
            </div>

            {/* الحالة 4: بدون وظيفة onClick */}
            <div className="space-y-4 pt-[100px]">
              <CategoryCard
                title="Clothing"
                image="/test4.jpg"
                description="Stylish clothing for every season."
              />
              <p className="text-center text-sm text-light-muted dark:text-dark-muted">
                <strong>الحالة 4:</strong> بدون وظيفة <code>onClick</code> (ليست تفاعلية).
              </p>
            </div>

            {/* الحالة 5: نص طويل جدًا */}
            <div className="space-y-4 pt-[100px]">
              <CategoryCard
                title="Gardening Tools and Supplies"
                image="https://via.placeholder.com/150"
                description="Find all the tools and supplies you need to create your dream garden, including shovels, pruners, soil, seeds, and much more."
                onClick={() => alert('Gardening category clicked!')}
              />
              <p className="text-center text-sm text-light-muted dark:text-dark-muted">
                <strong>الحالة 5:</strong> نص طويل جدًا (يتم تقصيره تلقائيًا).
              </p>
            </div>

            {/* الحالة 6: بدون أي بيانات */}
            <div className="space-y-4 pt-[100px]">
              <CategoryCard />
              <p className="text-center text-sm text-light-muted dark:text-dark-muted">
                <strong>الحالة 6:</strong> بدون بيانات (ستظهر مشكلة لأن <code>title</code> مطلوب).
              </p>
            </div>
          </div>
        </section>
        <hr className="my-8 border-t-2 border-light-border dark:border-dark-border" />
        {/* Tags */}
        <section
          id="tags"
          className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border"
        >
          <h2 className="text-2xl font-semibold mb-4">Tags</h2>
          <p className="mb-6">
            Tags are used to categorize content or products, making it easier for users to filter
            through options.
          </p>
          {/* <Tags tags={['Sale', 'New Arrival', 'Top Rated']} /> */}
          <Tags tags={tags} onClick={handleTagClick} color="gray" />
          <hr className="my-8 border-t-2 border-light-border dark:border-dark-border" />
          <Tags tags={tags} onClick={handleTagClick} color="blue" />
          <hr className="my-8 border-t-2 border-light-border dark:border-dark-border" />
          <Tags tags={tags} onClick={handleTagClick} color="green" />
          <hr className="my-8 border-t-2 border-light-border dark:border-dark-border" />
          <Tags tags={tags} onClick={handleTagClick} color="red" />
          <hr className="my-8 border-t-2 border-light-border dark:border-dark-border" />
          <Tags tags={tags} onClick={handleTagClick} color="yellow" />
        </section>
        <section
          id="tags"
          className="bg-light-background dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border"
        >
          <h2 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">
            Tags Component
          </h2>
          <p className="mb-6 text-muted">
            The `Tags` component allows users to display a list of tags with customizable colors and
            actions on click.
          </p>

          <div className="flex flex-wrap justify-start gap-12">
            {/* الحالة 1: التاغات الافتراضية باللون الرمادي */}
            <div className="flex-1 min-w-[200px] space-y-4">
              <Tags
                tags={['Default', 'Tag', 'Example']}
                onClick={tag => alert(`Clicked: ${tag}`)}
              />
              <p className="text-sm text-light-muted dark:text-dark-muted">
                <strong>الحالة 1:</strong> تاغات افتراضية (اللون الرمادي).
              </p>
            </div>

            {/* الحالة 2: تاغات بألوان مختلفة */}
            <div className="flex-1 min-w-[200px] space-y-4">
              <Tags
                tags={['Blue Tag', 'Green Tag', 'Red Tag', 'Yellow Tag']}
                onClick={tag => alert(`Clicked: ${tag}`)}
                color="blue"
              />
              <p className="text-sm text-light-muted dark:text-dark-muted">
                <strong>الحالة 2:</strong> تاغات ملونة (اللون الأزرق في هذه الحالة).
              </p>
            </div>

            {/* الحالة 3: تاغات بدون حدث onClick */}
            <div className="flex-1 min-w-[200px] space-y-4">
              <Tags tags={['Read Only', 'Non-Clickable']} color="green" />
              <p className="text-sm text-light-muted dark:text-dark-muted">
                <strong>الحالة 3:</strong> تاغات بدون وظيفة <code>onClick</code> (ليست تفاعلية).
              </p>
            </div>

            {/* الحالة 4: تاغات متعددة بألوان مختلطة */}
            <div className="flex-1 min-w-[200px] space-y-4">
              <Tags
                tags={['Mixed', 'Colors', 'Are', 'Fun']}
                onClick={tag => alert(`Clicked: ${tag}`)}
                color="yellow"
              />
              <p className="text-sm text-light-muted dark:text-dark-muted">
                <strong>الحالة 4:</strong> تاغات متعددة بلون مختلف (اللون الأصفر هنا).
              </p>
            </div>

            {/* الحالة 5: قائمة تاغات فارغة */}
            <div className="flex-1 min-w-[200px] space-y-4">
              <Tags tags={[]} onClick={tag => alert(`Clicked: ${tag}`)} />
              <p className="text-sm text-light-muted dark:text-dark-muted">
                <strong>الحالة 5:</strong> قائمة تاغات فارغة (لن يتم عرض أي شيء).
              </p>
            </div>

            {/* الحالة 6: قائمة طويلة جدًا */}
            <div className="flex-1 min-w-[200px] space-y-4">
              <Tags
                tags={[
                  'Tag 1',
                  'Tag 2',
                  'Tag 3',
                  'Tag 4',
                  'Tag 5',
                  'Tag 6',
                  'Tag 7',
                  'Tag 8',
                  'Tag 9',
                  'Tag 10',
                ]}
                onClick={tag => alert(`Clicked: ${tag}`)}
                color="red"
              />
              <p className="text-sm text-light-muted dark:text-dark-muted">
                <strong>الحالة 6:</strong> قائمة طويلة من التاغات (مع تمرير تلقائي إذا لزم الأمر).
              </p>
            </div>
          </div>
        </section>
        <hr className="my-8 border-t-2 border-light-border dark:border-dark-border" />
        {/* Avatar */}
        <section id="avatar" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Avatar</h2>
          <p className="text-gray-500 mb-6">
            Avatars represent users or entities, often showing a profile image or initials with an
            optional status indicator.
          </p>
          <Avatar
            image="/test1.jpg"
            size="large"
            alt="User Avatar"
            initials="JD"
            badge="Online"
            badgePosition="bottom-right"
          />
          <hr className="my-8 border-t-2 border-light-border dark:border-dark-border" />

          <Avatar
            image="/test2.jpg"
            initials="AB"
            size="medium"
            badge="Offline"
            badgePosition="top-left"
          />

          <hr className="my-8 border-t-2 border-light-border dark:border-dark-border" />

          <Avatar
            image="/test3.jpg"
            size="large"
            initials="AB"
            badge="Pro"
            badgePosition="top-right"
          />
        </section>
        <section className="bg-light-background dark:bg-dark-background p-8 rounded-lg shadow-md border border-light-border dark:border-dark-border">
          <h2 className="text-2xl font-semibold mb-6 text-light-text dark:text-dark-text">
            Avatar Component Showcase
          </h2>
          <p className="text-muted mb-8">
            The `Avatar` component is a versatile UI element that supports various configurations
            including size, badge, initials, and images.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* الحالة 1: الصورة فقط بالحجم الافتراضي */}
            <div className="flex flex-col items-center space-y-4">
              <Avatar image="https://via.placeholder.com/150" />
              <p className="text-sm text-light-muted dark:text-dark-muted text-center">
                <strong>Case 1:</strong> Avatar with an image (default size: medium).
              </p>
            </div>

            {/* الحالة 2: الصورة بحجم صغير */}
            <div className="flex flex-col items-center space-y-4">
              <Avatar image="/test4.jpg" size="small" />
              <p className="text-sm text-light-muted dark:text-dark-muted text-center">
                <strong>Case 2:</strong> Avatar with an image (small size).
              </p>
            </div>

            {/* الحالة 3: الصورة بحجم كبير */}
            <div className="flex flex-col items-center space-y-4">
              <Avatar image="/test4.jpg" size="large" />
              <p className="text-sm text-light-muted dark:text-dark-muted text-center">
                <strong>Case 3:</strong> Avatar with an image (large size).
              </p>
            </div>

            {/* الحالة 4: بدون صورة مع الأحرف الأولى */}
            <div className="flex flex-col items-center space-y-4">
              <Avatar initials="JS" size="medium" />
              <p className="text-sm text-light-muted dark:text-dark-muted text-center">
                <strong>Case 4:</strong> Avatar with initials (medium size).
              </p>
            </div>

            {/* الحالة 5: بدون صورة، بدون أحرف أولى */}
            <div className="flex flex-col items-center space-y-4">
              <Avatar size="medium" />
              <p className="text-sm text-light-muted dark:text-dark-muted text-center">
                <strong>Case 5:</strong> Avatar with no image or initials (default fallback:
                &quot;?&quot;).
              </p>
            </div>

            {/* الحالة 6: الصورة مع شارة (Badge) */}
            <div className="flex flex-col items-center space-y-4">
              <Avatar image="/test4.jpg" badge="3" badgePosition="bottom-right" />
              <p className="text-sm text-light-muted dark:text-dark-muted text-center">
                <strong>Case 6:</strong> Avatar with a badge (default position: bottom-right).
              </p>
            </div>

            {/* الحالة 7: بدون صورة مع شارة */}
            <div className="flex flex-col items-center space-y-4">
              <Avatar initials="JD" badge="New" badgePosition="top-left" />
              <p className="text-sm text-light-muted dark:text-dark-muted text-center">
                <strong>Case 7:</strong> Avatar with initials and a badge (position: top-left).
              </p>
            </div>

            {/* الحالة 8: الصورة مع شارة مختلفة الموقع */}
            <div className="flex flex-col items-center space-y-4">
              <Avatar image="/test4.jpg" badge="!" badgePosition="top-right" />
              <p className="text-sm text-light-muted dark:text-dark-muted text-center">
                <strong>Case 8:</strong> Avatar with a badge (position: top-right).
              </p>
            </div>

            {/* الحالة 9: الصورة مع شارة بحجم صغير */}
            <div className="flex flex-col items-center space-y-4">
              <Avatar image="/test4.jpg" size="small" badge="1" />
              <p className="text-sm text-light-muted dark:text-dark-muted text-center">
                <strong>Case 9:</strong> Small Avatar with a badge.
              </p>
            </div>
          </div>
        </section>
        <hr className="my-8 border-t-2 border-gray-200" />
        {/* ProgressBar */}
        <section
          id="progressbar"
          className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border"
        >
          <h2 className="text-2xl font-semibold mb-4">ProgressBar</h2>
          <p className="mb-6">Progress bars display the progress of ongoing tasks or processes.</p>
          <ProgressBar progress={60} />
        </section>
        <section className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border">
          <div className="p-6  flex flex-col items-center justify-center">
            <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
              ProgressBar Test
            </h1>
            <ProgressBar progress={progress} showLabel={true} labelPosition="inside" />
            <button
              onClick={incrementProgress}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
            >
              {progress >= 100 ? 'Reset' : 'Increment Progress'}
            </button>
          </div>
        </section>
        <section className="p-6 bg-light-background dark:bg-dark-background rounded-lg shadow-md space-y-6">
          <h2 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">
            ProgressBar Component Showcase
          </h2>
          <p className="text-muted mb-6">
            The `ProgressBar` component visualizes progress with optional step indicators and
            customizable options.
          </p>

          <div className="space-y-8">
            {/* الحالة 1: تقدم بنسبة 25% مع الخطوات الافتراضية */}
            <div>
              <ProgressBar progress={25} />
              <p className="text-sm text-muted mt-2">
                <strong>Case 1:</strong> Progress at 25% with default steps (5 steps).
              </p>
            </div>

            {/* الحالة 2: تقدم بنسبة 50% مع 10 خطوات مرئية */}
            <div>
              <ProgressBar progress={50} maxSteps={10} />
              <p className="text-sm text-muted mt-2">
                <strong>Case 2:</strong> Progress at 50% with 10 steps.
              </p>
            </div>

            {/* الحالة 3: تقدم بنسبة 75% بدون عرض الخطوات */}
            <div>
              <ProgressBar progress={75} showSteps={false} />
              <p className="text-sm text-muted mt-2">
                <strong>Case 3:</strong> Progress at 75% without step indicators.
              </p>
            </div>

            {/* الحالة 4: تقدم مكتمل بنسبة 100% */}
            <div>
              <ProgressBar progress={100} />
              <p className="text-sm text-muted mt-2">
                <strong>Case 4:</strong> Completed progress at 100%.
              </p>
            </div>

            {/* الحالة 5: تقدم بسيط بنسبة 10% مع 3 خطوات */}
            <div>
              <ProgressBar progress={10} maxSteps={3} />
              <p className="text-sm text-muted mt-2">
                <strong>Case 5:</strong> Progress at 10% with 3 steps.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
}

export default TestComponentsPage
