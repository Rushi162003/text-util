/**
 * v0 by Vercel.
 * @see https://v0.dev/t/82YaEsJVF7q
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"

export default function Component() {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg max-w-4xl mx-auto my-8">
      <div className="flex items-center justify-between">
        <input className="flex-1 mr-4" placeholder="Search for Hotels and more..." />
        <div className="flex items-center space-x-2">
          <input className="w-40" placeholder="From" type="text" />
          <input className="w-40" placeholder="To" type="text" />
        </div>
        <button className="text-gray-500" variant="ghost">
          <PanelTopCloseIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <div className="bg-gray-100 p-2 rounded-md">
            <p className="font-semibold text-sm">Room 1</p>
            <div className="flex items-center justify-between mt-2">
              <p className="font-semibold text-sm">ADULTS</p>
              <div className="flex items-center">
                <button className="text-gray-500" variant="ghost">
                  -
                </button>
                <p className="mx-2">1</p>
                <button className="text-gray-500" variant="ghost">
                  +
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="font-semibold text-sm">CHILDREN (AGE: 0-12)</p>
              <div className="flex items-center">
                <button className="text-gray-500" variant="ghost">
                  -
                </button>
                <p className="mx-2">0</p>
                <button className="text-gray-500" variant="ghost">
                  +
                </button>
              </div>
            </div>
          </div>
          <button className="text-gray-500" variant="ghost">
            + ADD ROOM
          </button>
        </div>
        <div className="mt-4">
          <input className="mb-2" placeholder="Enter promo/access code" />
          <a className="text-sm text-blue-600 hover:underline" href="#">
            Corporate Access Click Here!
          </a>
        </div>
        <div className="mt-4">
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white">CHECK AVAILABILITY</button>
        </div>
      </div>
    </div>
  )
}

function PanelTopCloseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <path d="m9 16 3-3 3 3" />
    </svg>
  )
}
