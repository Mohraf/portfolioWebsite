"use client";
import React, { useState } from "react";
import {
  Mail,
  InstagramIcon,
  LinkedinIcon,
  GithubIcon,
  TwitterIcon,
} from "lucide-react";

interface FooterProps {
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
    email: string;
  };
}

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
    // e.preventDefault();
    // TODO: Implement actual email sending logic
    // This could be via an API route, email service, etc.
    // console.log("Submitted form data:", formData);

    // Reset form after submission
    // setFormData({
    //   name: "",
    //   email: "",
    //   message: "",
    // });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
      type: "success" | "error";
      message: string;
    } | null>(null);
    // const [invalidFields, setInvalidFields] = useState<string[]>([]);

    const validateForm = (data: {
      name: FormDataEntryValue | null;
      email: FormDataEntryValue | null;
      phone: FormDataEntryValue | null;
      message: FormDataEntryValue | null;
    }) => {
      const invalid = [];
      if (!data.name) invalid.push("name");
      if (!data.email) invalid.push("email");
      if (!data.phone) invalid.push("phone");
      if (!data.message) invalid.push("message");

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (data.email && !emailPattern.test(data.email.toString())) {
        return { valid: false, message: "Please enter a valid email address." };
      }

      // setInvalidFields(invalid);
      return {
        valid: invalid.length === 0,
        message: invalid.length ? "All fields are required." : "",
      };
    // };
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {/* Social Media Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
          <div className="flex space-x-4">
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <InstagramIcon size={24} />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <LinkedinIcon size={24} />
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                <GithubIcon size={24} />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <TwitterIcon size={24} />
              </a>
            )}
          </div>

          {/* Email Display */}
          <div className="mt-4 flex items-center">
            <Mail className="mr-2" size={20} />
            <a href={`mailto:${socialLinks.email}`} className="hover:underline">
              {socialLinks.email}
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Send Me a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
              className="w-full p-2 bg-gray-800 text-white rounded"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
              className="w-full p-2 bg-gray-800 text-white rounded"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={4}
              className="w-full p-2 bg-gray-800 text-white rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors"
              onClick={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                setSubmitStatus(null);

                const form = (e.target as HTMLElement).closest(
                  "form"
                ) as HTMLFormElement;
                const formData = new FormData(form);
                const data = {
                  name: formData.get("name"),
                  email: formData.get("email"),
                  message: formData.get("message"),
                };

                // const validation = validateForm(data);
                // if (!validation.valid) {
                //   setSubmitStatus({
                //     type: "error",
                //     message: validation.message,
                //   });
                //   setIsSubmitting(false);
                //   return;
                // }

                try {
                  const response = await fetch("/api/", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                  });

                  if (!response.ok) throw new Error("Failed to send message");

                  setSubmitStatus({
                    type: "success",
                    message: "Message sent successfully!",
                  });
                  form.reset();
                } catch (error) {
                  setSubmitStatus({
                    type: "error",
                    message: "Failed to send message. Please try again.",
                  });
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Amos Okello. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
