// LuciCard.tsx UI component

import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, CardProps } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import { Link } from '@nextui-org/link'
import { Image } from '@nextui-org/image'



interface LuciCardProps extends CardProps {
  imageSrc: string,
  imageAlt: string,
  title: string,
  subtitle: string,
  body: string,
  footerLink: string,
  footerText: string,
  additionalLinks?: { href: string, text: string }[],
  additionalAttributes?: string[],
}

export default function LuciCard({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  body,
  footerLink,
  footerText,
  additionalLinks = [],
  additionalAttributes = [],
  ...props
}: LuciCardProps) {
  return (
    <Card className="max-w-[400px] bg-primary" {...props}>
      <CardHeader className="flex gap-3">
        <Image
          alt={imageAlt}
          height={40}
          radius="sm"
          src={imageSrc}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md text-background">{title}</p>
          <p className="text-small text-background">{subtitle}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="text-background">
        <p>{body}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex flex-col">
          <Link
            className="text-sm text-background"
            isExternal
            showAnchorIcon
            href={footerLink}
          >
            {footerText}
          </Link>
          {additionalLinks.map((link, index) => (
            <Link
              key={index}
              className="text-sm text-background"
              isExternal
              showAnchorIcon
              href={link.href}
            >
              {link.text}
            </Link>
          ))}
          {additionalAttributes.map((attr, index) => (
            <div key={index} className="text-left text-sm text-background">
              {attr}
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}