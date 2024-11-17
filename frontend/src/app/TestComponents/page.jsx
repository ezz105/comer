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

const TestComponentsPage = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [rating, setRating] = useState(3)
    const [rangeValue, setRangeValue] = useState(50)

    return (
        <div className="p-6 bg-gray-50 min-h-screen space-y-12">
            <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-12">
                Test Components Showcase
            </h1>

            {/* Button */}
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Button</h2>
                <p className="text-gray-500 mb-6">
                    A button element allows users to perform actions like submitting a form, confirming
                    selections, etc.
                </p>
                <Button onClick={() => alert('Button Clicked!')}>Primary Button</Button>
                <Button variant="secondary" size="sm">
                    Secondary Button
                </Button>
                <Button variant="danger" size="lg" disabled>
                    Disabled Button
                </Button>
            </section>

            <hr className="my-8 border-t-2 border-gray-200" />

            {/* Input */}
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Input</h2>
                <p className="text-gray-500 mb-6">
                    Use input fields to collect information from users, such as their name, email, or any
                    other data.
                </p>
                <Input
                    label="Name"
                    placeholder="Enter your name"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    error={!inputValue && 'Name is required'}
                />
            </section>

            <hr className="my-8 border-t-2 border-gray-200" />

            {/* Card */}
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Card</h2>
                <p className="text-gray-500 mb-6">
                    Cards are used to display content like product details, images, and actions in a compact
                    way.
                </p>
                <Card
                    title="Product Title"
                    description="This is a beautiful handcrafted item."
                    image="/path-to-image.jpg"
                    footer="Product Footer"
                    actions={<Button onClick={() => alert('Added to cart')}>Add to Cart</Button>}
                />
            </section>

            <hr className="my-8 border-t-2 border-gray-200" />

            {/* Loading */}
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Loading</h2>
                <p className="text-gray-500 mb-6">
                    Loading components provide visual feedback when data is being fetched or a process is
                    taking time.
                </p>
                <Loading size="lg" color="green" />
            </section>

            <hr className="my-8 border-t-2 border-gray-200" />

            {/* Modal */}
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Modal</h2>
                <p className="text-gray-500 mb-6">
                    Modals are pop-up windows that can show additional content without navigating away from
                    the current page.
                </p>
                <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
                <Modal isOpen={modalOpen} title="Modal Title" onClose={() => setModalOpen(false)}>
                    This is the modal content.
                </Modal>
            </section>

            <hr className="my-8 border-t-2 border-gray-200" />

            {/* Table */}
            <section className="bg-white p-6 rounded-lg shadow-md">
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
                    ]}
                />
            </section>

            <hr className="my-8 border-t-2 border-gray-200" />

            {/* Badge */}
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Badge</h2>
                <p className="text-gray-500 mb-6">
                    Badges are used to provide labels or status indicators, such as showing availability or
                    notifications.
                </p>
                <Badge text="New" variant="success" />
                <Badge text="Out of Stock" variant="danger" />
            </section>

            <hr className="my-8 border-t-2 border-gray-200" />

            {/* Tooltip */}
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Tooltip</h2>
                <p className="text-gray-500 mb-6">
                    Tooltips provide additional information when hovering over an element, offering context
                    or clarification.
                </p>
                <Tooltip text="This is a tooltip" position="bottom">
                    <Button>Hover over me</Button>
                </Tooltip>
            </section>

            <hr className="my-8 border-t-2 border-gray-200" />

            {/* SearchBar */}
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">SearchBar</h2>
                <p className="text-gray-500 mb-6">
                    Search bars allow users to type keywords and filter content or find specific items.
                </p>
                <SearchBar
                    placeholder="Search items..."
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onSearch={() => alert('Search triggered')}
                />
            </section>

            <hr className="my-8 border-t-2 border-gray-200" />

            {/* RatingStars */}
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">RatingStars</h2>
                <p className="text-gray-500 mb-6">
                    Star ratings provide users with a simple way to rate items or services based on their
                    experiences.
                </p>
                <RatingStars rating={rating} onRate={setRating} />
            </section>

            <hr className="my-8 border-t-2 border-gray-200" />

            {/* ImageCarousel */}
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">ImageCarousel</h2>
                <p className="text-gray-500 mb-6">
                    Carousels allow users to swipe through a series of images or content, usually for
                    showcasing products or galleries.
                </p>
                <ImageCarousel images={['/image1.jpg', '/image2.jpg', '/image3.jpg']} />
            </section>

            <hr className="my-8 border-t-2 border-gray-200" />

            {/* Notification */}
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Notification</h2>
                <p className="text-gray-500 mb-6">
                    Notifications alert users about important information or actions, like new messages or
                    updates.
                </p>
                <Notification message="You have a new message!" redirectTo="" isRead />
            </section>

            <hr className="my-8 border-t-2 border-gray-200" />

            {/* Breadcrumb */}
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Breadcrumb</h2>
                <p className="text-gray-500 mb-6">
                    Breadcrumbs show the user’s location within the website&apos;s hierarchy, helping them
                    navigate back easily.
                </p>
                <Breadcrumbs
                    items={[
                        { text: 'Home', href: '/' },
                        { text: 'Shop', href: '/shop' },
                    ]}
                />
            </section>

            <hr className="my-8 border-t-2 border-gray-200" />

            {/* Range */}
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Range</h2>
                <p className="text-gray-500 mb-6">
                    Range inputs let users select a value from a defined range, useful for filters or
                    preferences.
                </p>
                <Range value={rangeValue} onChange={e => setRangeValue(e.target.value)} />
            </section>

            <hr className="my-8 border-t-2 border-gray-200" />

            {/* Dropdown */}
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Dropdown</h2>
                <p className="text-gray-500 mb-6">
                    Dropdowns are used to present a list of options for the user to choose from, saving
                    space and reducing clutter.
                </p>
                <Dropdown label="Select Option" options={['Option 1', 'Option 2', 'Option 3']} />
            </section>

            <hr className="my-8 border-t-2 border-gray-200" />

            {/* CategoryCard */}
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">CategoryCard</h2>
                <p className="text-gray-500 mb-6">
                    Category cards are used to showcase different categories, allowing users to explore more
                    products or services.
                </p>
                <CategoryCard
                    title="Handmade Crafts"
                    image="/path-to-category-image.jpg"
                    description="Explore our unique collection of handmade crafts."
                    onClick={() => alert('Category clicked!')}
                    bgColor="bg-gray-100"
                />
            </section>

            <hr className="my-8 border-t-2 border-gray-200" />

            {/* Tags */}
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Tags</h2>
                <p className="text-gray-500 mb-6">
                    Tags are used to label content with relevant keywords, enabling users to filter or
                    search efficiently.
                </p>
                <Tags
                    tags={['Handmade', 'Unique', 'Eco-Friendly']}
                    onClick={tag => alert(`Tag clicked: ${tag}`)}
                    color="blue"
                />

                <Tags
                    tags={['Handmade', 'Unique', 'Eco-Friendly']}
                    onClick={tag => <Alert message={`Tag clicked: ${tag}`} type="info" />}
                    color="blue"
                />
            </section>

            <hr className="my-8 border-t-2 border-gray-200" />

            {/* Avatar */}
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Avatar</h2>
                <p className="text-gray-500 mb-6">
                    Avatars represent users or entities, often showing a profile image or initials with an
                    optional status indicator.
                </p>
                <Avatar
                    image="/path-to-avatar.jpg"
                    size="large"
                    alt="User Avatar"
                    initials="JD"
                    badge="Online"
                    badgePosition="bottom-right"
                />
                <Avatar initials="AB" size="medium" badge="Offline" badgePosition="top-left" />
            </section>

            <hr className="my-8 border-t-2 border-gray-200" />

            {/* Alert */}
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Alert</h2>
                <p className="text-gray-500 mb-6">
                    Alerts are used to display important information or warnings that require the user&lsquo;s
                    attention.
                </p>
                <Alert message="This is an info alert." type="info" dismissible />
                <Alert message="Warning! Check your input." type="warning" dismissible />
                <Alert message="Success! Your action was completed." type="success" autoClose={5000} />
            </section>

            <hr className="my-8 border-t-2 border-gray-200" />

            {/* ProgressBar */}
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">ProgressBar</h2>
                <p className="text-gray-500 mb-6">
                    Progress bars are used to visually represent the completion status of a task or process.
                </p>
                <ProgressBar progress={30} color="blue" showLabel />
                <ProgressBar progress={70} color="green" showLabel labelPosition="outside" />
                <ProgressBar progress={100} color="red" showLabel labelPosition="inside" />
            </section>
        </div>
    )
}

export default TestComponentsPage
