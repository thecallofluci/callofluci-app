// this can be deleted after launch, just for testing purposes.

import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, CardProps } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import { Link } from '@nextui-org/link'
import { Image } from '@nextui-org/image'

const NextUICard = () => {
    return (
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">NextUI</p>
            <p className="text-small text-default-500">nextui.org</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
        <Divider/>
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>
    );
  }

  export default NextUICard