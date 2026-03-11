import React from 'react'
import Card from './assets/card'
import {Bookmark} from 'lucide-react'

const App = () => {
  const companies = [
  { logo: "https://imgs.search.brave.com/V7sgagRATLlWoAL9kKkWlvM1Lymxxb-2sk6dz3LnYrk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2MxL0dvb2dsZV8l/MjJHJTIyX2xvZ28u/c3Zn",
    companyName: "Google",
    role: "Software Engineer",
    position: "SDE I",
    duration: "Full-time",
    pay: "90",
    location: "Bangalore, India",
    posted: "7 days ago"
  },
  {
    logo: "https://imgs.search.brave.com/eVaKy8jZAlsU_3TjwWi7avLtpu8rvBRT6kzqINVrb6w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC85Ni80Ny9h/cHBsZS1sb2dvLXZl/Y3Rvci00NjMyOTY0/Ny5qcGc",
    companyName: "Apple",
    
    role: "Web-Developer",
    position: "Backend Engineer",
    duration: "Full-time",
    pay: "75",
    location: "Hyderabad, India",
    posted: "3 days ago"
  },
  {
    logo: "https://imgs.search.brave.com/wYqNxLGRzAuE8359cHbwwO8nFJzwMC4KEFRf9pvPuT0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjgv/MzM5Lzk2Mi9zbWFs/bC9taWNyb3NvZnQt/aWNvbi1sb2dvLXN5/bWJvbC1mcmVlLXBu/Zy5wbmc",
    companyName: "Microsoft",
    role: "Software Engineer",
    position: "SDE I",
    duration: "Full-time",
    pay: "80",
    location: "London, England",
    posted: "6 days ago"
  },
  {
    logo: "https://imgs.search.brave.com/-QlnopsS72o8z4m37MBvznkKqNpLr4D87VV3CRwrBjU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzk0LzU0LzA3/LzM2MF9GXzI5NDU0/MDcyMl9WSXdTV3ly/VTZxNzgxU2tIV1Ns/elVEWGpmb3VSbGo0/Ny5qcGc",
    companyName: "Amazon",
    role: "SDE-1",
    position: "SDE I",
    duration: "Full-time",
    pay: "60",
    location: "Bangalore, India",
    posted: "2 days ago"
  },
  {
    logo: "https://imgs.search.brave.com/zx7cxNMKmQOnZfpcwQbaxGEQVAHp_m6pV_e2gqJCE1Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzMv/NDk1LzIwNy9zbWFs/bC9tZXRhLWxvZ28t/cm91bmRlZC1nbG9z/c3ktaWNvbi13aXRo/LXRyYW5zcGFyZW50/LWJhY2tncm91bmQt/ZnJlZS1wbmcucG5n",
    companyName: "Meta",
    role: "Software Engineer",
    position: "Product Engineer",
    duration: "Full-time",
    pay: "67",
    location: "London, UK",
    posted: "14 days ago"
  },
  {
    logo: "https://imgs.search.brave.com/lPlgd2xkgzqxivxTcOUN9Ph6xjIGD0TbPBr5GMMe4lw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMx/MDMxMTU0NjAyLzIw/MTYtbmV0ZmxpeC1s/b2dvLTYwMHgzMTku/cG5n",
    companyName: "Netflix",
    role: "Backend Engineer",
    position: "Senior Engineer",
    duration: "Full-time",
    pay: "119",
    location: "California, USA",
    posted: "8 days ago"
  },
  {
    logo: "https://imgs.search.brave.com/QIawQsb6TOx_cGLrZuAvW3SI9mmjKv2ou3ynr0A2EvA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTQv/NjUwLzgwNy9zbWFs/bC9udmlkaWEtbG9n/by1yb3VuZGVkLW52/aWRpYS1sb2dvLWZy/ZWUtcG5nLnBuZw",
    companyName: "NVIDIA",
    role: "AI Software Engineer",
    position: "ML Engineer",
    duration: "Full-time",
    pay: "99",
    location: "Bangalore, India",
    posted: "3 days ago"
  },
  {
    logo: "https://imgs.search.brave.com/0pftxXrLxNA1Y0FPdzxzK622vJqFq5o2yDAxPmfI3_I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmE0YzAwNWZkZWUx/NWQyOTA1MDA3YmYu/cG5n",
    companyName: "Adobe",
    role: "Software Engineer",
    position: "SDE I",
    duration: "Full-time",
    pay: "49",
    location: "Noida, India",
    posted: "7 days ago"
  },
  {
    logo: "https://imgs.search.brave.com/2AONrVn84CWKH4JZPqiYXl69X4OfF9Qc0onZ67MjlrE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MzM2LzczNS9zbWFs/bC90ZXNsYS1sb2dv/LXRlc2xhLWljb24t/dHJhbnNwYXJlbnQt/cG5nLWZyZWUtdmVj/dG9yLmpwZw",
    companyName: "Tesla",
    role: "Software Engineer",
    position: "Autopilot Engineer",
    duration: "Full-time",
    pay: "87",
    location: "Austin, USA",
    posted: "18 days ago"
  },
  {
    logo: "https://imgs.search.brave.com/yIeGAc0jcmU27LXdChRIAXxfrCdhllNIhnuTzUtI_Z0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXNhbGVzZm9yY2Ut/aWNvbi1zdmctZG93/bmxvYWQtcG5nLTI4/MjI5OC5wbmc_Zj13/ZWJwJnc9MTI4",
    companyName: "Salesforce",
    role: "Cloud Engineer",
    position: "Platform Engineer",
    duration: "Full-time",
    pay: "62",
    location: "Hyderabad, India",
    posted: "7 days ago"
  }
];


  return (
    <div className='parent'>{
      companies.map(function(elem){
        return <Card logo={elem.logo} company={elem.companyName} role={elem.role} position={elem.position} duration={elem.duration} pay={elem.pay} location={elem.location} posted={elem.posted}  />
      })
    }
    </div>
  )
}

export default App
