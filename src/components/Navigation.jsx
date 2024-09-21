
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    // BreadcrumbSeparator,
  } from '@chakra-ui/react'

const Nav {
<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>About Me</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Portfolio</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Resume</BreadcrumbLink>
  </BreadcrumbItem>

</Breadcrumb>
}

export default Nav