import { CONTACT } from "../constants"


export const Contact = () => {
  return (
    <div className="pb-20 border-b border-neutral-900">
        <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
        <div className="text-center tracking-tighter">
            <p className="my-4">
                {CONTACT.address}
            </p>
            <p className="my-4">
                {CONTACT.phoneNo}
            </p>
            <a href="#" className="border-b">
                {CONTACT.email}
            </a>
        </div>
    </div>
  )
}
