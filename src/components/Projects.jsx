import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../Utils/ThemeContext'

const Projects = () => {
  const { theme } = useTheme()
  const dark = theme === 'dark'
  const [activeCategory, setActiveCategory] = useState('All')
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform with cart functionality and payment integration',
      image:
        'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
      category: 'Websites',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      demoLink: '',
      githubLink: 'https://github.com/sachin-kore/MERN-Proshop-App',
    },

    {
      title: 'TMDB movie Api clone',
      description:
        'Apis to fetch trending movies see the details of the movie search movies and watch',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBwpgg4OU-F9-v0DaLoqPMSGIr2nN4IIIGKThOhf7kTI3H9Jw-c38SIvSXCR2Mj139Og&usqp=CAU',
      category: 'Mobile',
      techStack: ['React js', 'html', 'JavaScript', 'axios', 'sass', 'Redux'],
      demoLink: '',
      githubLink: 'https://github.com/sachin-kore/Movix-OTT-Plotform',
    },
    {
      title: 'Booking.com clone app ',
      description: 'we can book hotels anywhere in cities',
      image:
        'data:image/png;base64,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',
      category: 'Mobile',
      techStack: ['React js', 'html', 'JavaScript', 'axios', 'css', 'Redux'],
      demoLink: '',
      githubLink: 'https://github.com/sachin-kore/Booking.com-clone',
    },
    {
      title: 'Home Construction ',
      description:
        'You can book an appointement with us . We will will plan build your house  anywhere in cities',
      image:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFhUXFxgXFxUWGBUXFhgYGBcWFxUXFxcYHiggGBolGxUXIjEhJSkrLi8uFx8zODMtNygtLisBCgoKDg0OGhAQGjcgHyUtKy0tLS0tLS4tLS0tLSsrLSsvLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTA3LS0tL//AABEIANYA6wMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAABAUGBwECAwj/xABMEAACAQIDBAUHCAYIBgIDAAABAgMAEQQSIQUGMUETIlFhcRcygZGSodMHFCNCU1WUsRUzUmLB0SRDVHKCorLwY4OzwtLxFpMlRHP/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QALREAAgIBAwIEBgEFAAAAAAAAAAECEQMSITEEQRNRYaEUInGBsfAyBRWR0fH/2gAMAwEAAhEDEQA/ALUoopu3g21Fg8O+JmJyIBoouzEkBVUdpJHd26Vo5jjRUJ2dv7IZYkxWz58NHOQIZWOdST5vSAKDHe69vHs1rbaO/b9NLDgsDNi+gOWZ0YIqsOKr1TnYWItpqNKhaJpRUD2p8p2HjwcGMjiaRJJTE6ZgjxFRmYEWIZgLaXF7jWnXFb5RLisLh1XPHiYXnE4bRUSN5PMy9a4TtHGgok9FQfYHygPiXiI2fOuGmcpHiFIkAKkKTKiL9ELniT36gGuMu/uMGI+afohzMUMip85i1QErmvksNQdL3oKJ9RUDx3ygypNio02dJImEsZpFmTqqVLZshXXg3Anzac9nb6Rz4rD4eOI5cRhfnSyFgCozOuQoAdQUOuagolNFRF9/YUGOaaMomDlEVw2dpWbMFyrYZSSOBJ8dK4bM37kaaKLFbPnwqzkCGVjnU34dIAoMZN101tmF7DWgomtFQGff3GLiRhP0S5mKGRU+cxjMgLDNfJYeadL3p93t3mOBSGV4C0TyLHK4axhzWsxXKcw87mNQBzoKJDRUWXfWM4nFRZPoMJHnmxWcFQxFxGqAXY+cOPFSLcLtC/KWwVcRNs7ERYJyAuJJDGzGys0QGintDG+lr3oKLAoph2dvIJsfPghHpDHHIJQ9w4kVGAC208/jc8Kjr/KUfm6TJgyzPi2wixiYAlgqkNmKW1LAW5dtBRYFFRvdjev51NNhpcO+HxEAUvE7K4ytaxVl48V5fWHGpJQgU44ZbKPX66bgKdQOVVAzRRRVAUUUUAUUUUAUUUUA01GflF3fkxuBeGIjpAyyIDoGZD5pJ01BPHS9qk1Itr47oYjJlzWIFr24kDjY1iUlFNvhG8cJTkox5ZF9n7e2vNLDH+jlw6gj5xLM2ZbDj0IUgknW3ncRfhemzZ8eP2XNio4sC2LhnmaeKSNwpVn+pICCQBYa93O+kvg224dFngMWfRGzBlJPAG3DiPXXF94JQZSuHzJExVmzgcCRexHdXF9RjS59meldFmbpL3VeXN1yQFtysWuHwgli6SSTaIxWJjUBkjR8oZTrYiw148ba2vXTZe5uLwu2IAiF8FEJzC7arGssU30Tnj+sa3O+a/Op/Ptxy6JDD0meMSC7BTY301FtLdtKcdtIxQCV0s5sOjzX6xPDMOOlz6KqzQabvj0Zl9NlTiq3fCtX/grLZWwsYmMgbDYGXAsJr4rLLmwbxXF8qknMSLiw01FrcRLsRsyY7djxAjboRgjGZPqh+kkOW/bYj10+QbYzYZpwuqg3S/Ag8L27LHhzowm2lfDtORbLmut76jgL253Hrq+NDbftf2I+myq/l4en7lY7ybn42Wfac0SzDNJCUjDMqYqOziVCFIzW0I9I509bT2diMPicFtDCYJ3jjwvzd8KCFliHXIGt7kF7X1vl771Odi7S6eMyFcvWIte/AA8bDtrhhdsF8M2IyAZc3VzXvl77fwp4sKTvlX9kH0+VNxrhpP6vgruTczG4rB42V41ixE+KXFRQMwNgmcBXbhciRrXtqova+kn2ft/a080Sfo9cNGD/AEiSZs4I0uIQpXXjY9Yai/DV6l26csQSIvLKoYRg6AEc2t3H1cqzh9tE9IkkRjlRC+Qm4YAX0YVPHx3VmvhM1XXur5q65r1GXF7MmO3YcSI26FcGYzJbqh88pyk9tiPXUh3j2euIws8DrmDxsLc81roR3hgCO8CueydtLLE8jDJkvmF72Frg8u/1UiXeY9C03RDRwmXN2qTe+Wj6jGknfO4XRZ3Jx07ppduXwRvdjc1zsOTBuhhnn6Rnz8ekEn0Wb920aegmm/HJtTE4BNlHZxjbLFE+IZ06EJEUIdbDicg0F+duVrLwE8zZulh6O1rdcPfjfhwtp66V11i1JWjzzThKn7O/wVvNs7GbNx7YjD4R8XDJhoYbIwV1aFERc17mxEdybfW46aszbl4wYLBxPG/SNtD5xMIj1oUcKpOYHQgLe4Jtfuq4aKpmyC/JtsSXCy4xcTG7SmQWxblm6eIaJ1mJsRzGnEcctTqiigZ0w63YeP5a05UhwI1J7BS6qiBRRRVAUUUUAUUUUAUUUUA0017y4dnw7KilmJXQcfOF6g/lrwH2GK9mL4lHlrwH2GK9mL4lc5xU4uL7nXFN45qa7OyUyxT4holaExJGwZmYi5tyA/3xpDidjzHpnCv+uJ6O5AkQsTy9Hopk8teA+wxXsxfEo8tmA+wxXsxfErzy6WMv5O3+o9sP6hOH8IpLy387ffv/AMJJtTBZpkb5vI0YiUZV6pU3ay8Ra1xXTG4WWVsOkcZRI1DfSXKhhoqtzJAX/NUX8tmA+wxXsxfEo8tmA+wxXsxfEq/DR335+hn46a0/LwqW7/F0SKPBTouJiKZhIudSgOUubXAv4/5a5wbHlzRx5SIpBE0vYGQHMp7L/mR2Uw+WvAfYYr2YviUeWvAfYYr2YviVn4SDrc0v6jkV0lv+aSv2smm7GGdISrqVOdjY9hAtTThNgXwrM8TdMM2UXI/u9W9jTD5a8B9hivZi+JR5bMB9hivZi+JW300GknvSaMLrssZSlHbU039u30JMuDmiME6RlyIljkjvZhYcR/vl31v82mmeSd4zHaF0RDqxJVuPtH1iot5a8B9hivZi+JR5a8B9hivZi+JU+Gjxe3NeofWze+lXxe/F3XNffkeYtjzhY1VWUSqFm083LITc9nVt7+2tsRsyXoJUWJtcRmUW4rZgCO7hTJ5a8B9hivZi+JR5a8B9hivZi+JWPg4Vz+/u51/ueW7pc373/pfQnGw4lUOFgkiFweuSc3Hhcnhb306VWflrwH2GK9mL4lHlrwH2GK9mL4leqEdMaPBlk8k3Lz+/5LMoqs/LXgPsMV7MXxKPLXgPsMV7MXxK0c6ZZlFVn5a8B9hivZi+JR5a8B9hivZi+JQUy2cCuhPfSmqnh+XTZ4AHzfF+zD8St/Lvs/8As+L9mH4lWxTLVoqqvLvs/wDs+L9mH4lHl32f/Z8X7MPxKWKZatFVV5d9n/2fF+zD8SpnuTvfDtOJ5oI5UVH6M9IFBLZVY2ysdLMPXVsUSKiiihAooooDxJTlu3sdsXiEgDZQ18z2zBFAuWIuNPSOIptpVszEiN7tfKVdGy2vZ0ZLi+htmvburB0HrHbrqYy2ExC4lov1yICCO14hxkjHAkdgPMhX/dLcDD4yKBzPiFklDnoxFGxKpLDC0ifSfq1ea5JsbQyWGlRmTa0HRsqRlWydGjAIt1tD1nK6ls0btfXz7X0pdsraGzBEi4iCUuFQFl4GzzmQABlIujoL5iMwUkWUhgJVgvkmifof6VIc8YY5I0bOW+a2lh6/Xw6fOuu5sR0TWHZDsfuwMPLgleaKZcSI3Iia+UNJlKn+B8eyl0G0NjZhnwswUXAyO92F5gc15DbqmI6W6xblpTVLiMJ87w74ZWjjXoS+f9sMOka+Y6c+XPTtA47tbJTEtKrM4yxM65FzsWDIFXJxa+a1gRqRT3j9yRBh5Z5WkzBfo4wsdyep9IxR3XowG7QTYkaKaYd3ds/NXd8mbMmQahSpzo4YXUgkZOBBGtSbGb5wyYeSNvnDSOh1YRABmQoQTGVDJqOK30ubnLlA77r/ACdJisHDijO4MkrqyIiMQqJK2RczjNKxiAA/4i8tadX+SaJeOKka0ki2SNCXCDEnoIrv1sUPm2qGwHSDU2qJbG2rgFiWKeAkhGu4UE9KZSyNoyvlChQbOLi4FuJ2xmO2UFToYJswlQnOTpGCDJwksznKRewGVhpcFiBrvjuf8yXOMVDKDPNCFUjpB0RAzMvLvHI243qK1OjtfY0hBkwjoAeEY4rmbmrrZiMpN1IFyBbjTDtzEYFoY/m0TxzXvLfMU1RbhCzscofNa4vbiaAY6dRsRgAzyRqCQLdZm15AIpufTTVT9hNrqwQSHK0bK6FrtFdeCsigMot2E8OGtYm5Lg64lBv5hdHu/GJIQySWVlaYEIDJGJAshQiQoGAIGUkanjUsk2ns52lAwN880EiWwuEXo8M7xIY1s468ilrE3IzDn1hFf04pWRRPGpZCNI5lW7EschVswuSSzPx6otYUrhxELy3+cQnMUdwiyxXEKt0QzSsADcp1RbzeItrxUskYts9MoYJzUYv0/fYkmG2xs+RGaXZKRs0iMwWPClUgR41cBiyHO3Ry6gKpzcGtes/O9n5kz7P1bEPMwGGw36iNQEQKsg11hJQZR1nzBzqzRFi9nlZc+PCM7ZTH0WIeyR50W0i2DKVs2XW+ci4410mx2zmmEh2k4IDIGEEoASQElwn1XUtY6m+QceNaUsr7Iw4dOtm3+vf24INvI6tipysYjUyPljAQZVucqkR9QEC1wul71INnbO2SywtNPKjWVpVCSFCAnW6wQkXk0uLiw4a3Ea2tHAshXDuzxi3XYWzH6xAsCFvwvrT1BtyDo1jdGbLCqXAsT9IGkQm/mkKLHkb9tdJSaqlZxxwjJu3XkOMuA2MzoExElnzBgEm+iAQMrKChLEspUjXRydLU1bFwcUhjEsUjr83LN0WUSA/OGXMMzAM1jlA1uSosayNqYdZ1lTMoUFWyRhA4bpPqq1hYFB36nlry2XtKKLIXaQXw7JeFirKxndrGzL9W/G4uVJVgLVYyb7EnBR4d/qHYbBgzLlwO0mCq2cNHbM2oU2WxsHKggHh4G/bDbAwRXN812qb66RxXy6+bwzWupvbl2Vw/TuCObNPtWxI06eMlgScxOlgcvjq1Nm1tvaq2GxONDEHpOlmJPHqgFbfvE+I760cxBt6KFJAkKTJlUBxOAsnSXbN1RwFsot3V6O+RHA9FsiEkWMrSSnvu5RT7KLXmOWZmJZ2LMeJYkk8hcmvYm62A6DB4aA8Y4IkPLrBBmNvG9VEkOlFFFaMBRRRQFJ+QFfvE/hx8WjyAr94n8OPi1dVFKQ1MpXyAr94n8OPi1nyAr94n8OPi1dVFSkNTKV8gK/eJ/Dj4tHkBX7xP4cfFq6aKUNTKW8gC/eJ/Dj4tHkAX7xP4cfFq6qKUW2Up5AF+8T+HHxaPICv3ifw4+LV1VmlC2Up5AV+8T+HHxaPICv3ifw4+LV10VaQtlKeQBfvE/hx8Ws+QBfvE/hx8WrqoqUS2Ur5AF+8T+HHxaPIAv3ifw4+LV1UUpFtlK+QBfvE/hx8WjyAL94n8OPi1dVFWkNRSvkAX7xP4cfFo8gC/eJ/Dj4tXXWKlDUylfIAv3ifw4+LR5AV+8T+HHxauo0GlImplK+QBfvE/hx8WjyAL94n8OPi1dVFKLqZTOG+QRFdWbHlgGBK/NwMwBBK36XS40q5qKKEbsKzWKKpDNFYooBtTawyZijXHFRlOn7V72y6HU2pwRgQCOBFx4GolHtAdVVvqdXBN11ynlYggWGvGl086yTgLKFZRYAjtsRcg6307OItevJDO2vPg7yxokNFcsOGC9c3PM6eGlgPH010r1J2cTNFFFUGaxSfaGOihQyTSLGg4s5AHv4nuqH4ze3EYjq4KPo4/7TOpBI7YoTqfF7eFVKyN0Tii1QiPH7ShA+khxK9ki9E/oePT1rSuHfhV0xOGnh7WC9NH7UfWt4rUKSy1FIdm7aw2IF4J45O5WBYeK8R6RS+gMUVmigMUVmigMUVmigCsVmigMUVmsUAUUUUBgCs0UUBi1ZoooAooooCtoMWyHRlIJGZetwBvewOljY30NzSiPGhHzKWkJYnOxcqLKygFD2gLqCKYcHiFUEAdXsy9Y8Tc+4cDStMUtiFHbYLx04kL2DX0jxr8/rnHZH0XFMneB2ugXrXACgk/VDWHVByrcm/591KNlbUWfNZStuFyLkdtuXvqt8Zt5eoJC5AvxuACQul246cO6luD21JocNHc8ekluqD0edIPUOOte/BnzTmklsebJCEU23uWRPMqKXdgqqLlmICgdpJ0FRDaG+jOejwMee//AOxKCsQ70XRpfcO803SQGciTEyGYg6A6RKRzWIdUHvNz30i2jteGGS8jgWGijVj4KNa+pprdnk1eQqXZmdxNiHaeUcGfzU7o4x1UHgL99L5JFRSzEKBxJIAHpNQbaG+8jaQRhR+1JqT4KDp6TUax2MlmN5ZGfx80eCjQVHliuB4cnyXHhtowygdHLG/91lb3A11YVRzAaaWt+fd2Utwu3cTH5k8gHYWzD1PcVz8RHTSWRtfZMLlWaNb384Cze0NRSvZsWIRfoMXKP3JbTJ3ef1gPBqgMe+eJOjdGw71IPrB/hTxszfpF/WRMOGqFWHfcGxpqRSdRbwYyPSbDpKP2oHysf+XJpf8Ax0vw+9uFJyu7Qt2TqY/8x6p9BqMYTezByH9cFPZICnvbT308pkkXQq6nsIYGtbGSUxyBhdSCO0EEesVkmwueHbUFl2VGhDRZoiTqYWaO/iFNj6RXDE7Fkn6zTu+t8s30i3HYLgLqOQqFolWM3nwkZt0oduGWIGQ37CVuF9JFMuM30fhFBl7GmYevIl7j/GKY8Ts3EJ/Vggc4zf3aH0AUikOtjmBtqG6h9RF60qMuxyxO18VIwzYll7ossag8rfWPgWI0p1wu8WJj0cLOP/rk79R1W9Q8ajmGjJZTltbu499zTmRbTt17PRrUkWJLMDvJh5DlLGN/2ZRl17A3msfA071XJtwIBvoQbenQ6VO9kIBBEALAIug8BUK0K6KKKECiiigCiiigCiiihCmMLrm1BYki2YBcuUkc9NV/3y7DEWsOqVHHsa9y1+9QSPRUfkxMpN2EhFrCzE2HO1zoT29wrvDtSFVs0Utwb3yqTc+d1uPgOXeda+XPpJ09j2rNEkuytnRfrpLM2pBa2RQdeqOA48aSbZ3nw6MbPn0t1fN58W4W15XqO47auGk89pCBayt0mW2n1VIAPHlUd3gmjZfoRYc7FibdhzcPRX0Y56SiotHleO3bdj9tDeqUqI454gtvNibNJ6SdR6AKZFxIvc3vzJuSfE0i3SwgfFIrC4s3uF6ke1NnASNYWF+FSUW1bZpNJ7ISYedDpxpapj5o3qNIYogDyrviJrDTT014pxd7HshJUYxM8I7R4014jHRD6wpBKvSTWcsVsToT2i2vppzwWDhUXEak3bVhc6MQNTW1FR7mXLV2OEOIVhcMPypSkLHhc+FcNgYdsilTa6C/fqacDhZFN+pa3Z1vXW5OnVnNRT7HHon/AGT766RTshupyntUlT6xrTdtZ2I1LXvzdzyPIm1dNnagam9hfsom6sw4RbpEjg3pxaADpmYdjgP7yM3vp82XvzKo+kiVv7rFPTYg/wAKhuImyAdUG5t7jr7q0ix7OcsYDEfVjUu3qW591aU5PguiK5LSi34wzgBhJGb81zD1pf8AKnfCY/DS6LLG9/qki/snX3VUuH2Nj5dUwmJPeYzEPXJlFdX2NjYlHS4DFWOodU6Ua6i5iLWrXiS+pNMS15NhxEggFD2qbD1G4HqrDbJkA6rqw7GGU+ki4PqqpI94pYTlXESREf1blkt/ge1POF+UTGJ5wjlHaRY+tbVpTvsRxS7k4lwji942AI4r1v8ATr6bVLNkYuNo40V1LBFBW4zAgC914iq1wXyooxtLhnB7UZW9xtUu2DtGLFMkqKbBvrrYg2vpfx5V0RholdFZorRgxSbEY5EZUZrFuHhrqewcrnmbUxb3beEUTRJcyPmQWvderq5tqOIItcm9Vls1H6ResSrK0arIW83KrPYA6Draajje9c5SoF2S4pVtre9uFj5xsD4fyrvVMY/ESZhllfK7dTiqk8BYE2sCVHYB753udtVimSVr5bKNLkGxa2l+RPfYcOZRnbo00SytGmUaFgD3kU1bybcTCqhe9mbzhwGUqSD2Ai+vKoNtLbOHaV2tidWJ6rIRfmOtrx5cq02SiPymkE5rnJtMiFZCLk6ED0/yrLPcBu0XroZGvFpTRiQQCO40+YkU041dDUcUy2d9zR/Tk8G/0GpXtkddtOdRfdHTHR+Df9M047a2+GkZFjN7ka8dNOArM9oi6kRzGTHOdTxrXFYskAV2bDO72EUhPGwVj/Dh312TY07Nl+bvfsOnp15V5qNqdDPBKc1+406wy9X0n8zW027soNwoGhuMwPqteu8Ow8QAOpccfOXtvzNNNm4zJV8mnQBPp0RgYUy51za5nvbTSpIkWAdjnjVQOSl1J7gL1CdgTdFFFmIB6IDUjU5ibceNPEMrupKqTfsue3h215c7kpulsenDocedxj3lGFzXiBU5ur1u4jnTRs2MyyLcm5P1eqDrbiRbjpWu19nyBmBRvOFgQefMV3wDThkiKhRccV4EaX7zbSuq2ieaV6iTbzbFhjhjZFOYyAG7E6GOQ27OVSjcXHPHg40jHJCeA/qYv5VV29bsJVjGUBVDZlVULMb63GvDTj21M9x8c3zZbnUHL6FAA9wFc5Rbx+Z3Ulr4J62KnPMDxP8AK9P+zZvoo9fqJ/pFQz56bcTXXZG9qCKNXHXXqsOAtbib6gDu16vfXPFCrNzaHHe4LJPgEdVdTiJLq4DKbYTEnUHjVUb87JhXNJHEkZuP1YyD9WTwWw4i9WBvdvPh1bBzra0U0jENcZgcPNHbh2uKgW8G2kxSMy2Xnl4DzCgt4ltPTXsxNdzz5H2EW7+CugY3J5k61am4K2sP+If9AqudhKOiAz20GnW61iew2twOt+VTDBMBg5D+/wAtPs69fY897lqUVRb70TIbRySpb/iSH02vb3VJN0t5sVI1nxDPb6pVNbg8erfs51zU03Rqjf5UTlsXCq7gBcmY51BucxKWUhtRYgm9jVd4SZldsrr1VYgk5rjRdARrca9mvdVwbd2gjx2xCxFeWZQdbcr31qqN49jrAVfDSB0fQ8yra2uePMaaeHOpKJDVtoMFjVnzZLFVbrKv7uXUG9k94Ip+3c3iRHZ5YxJcEZSwVLNxAUKbXIB0/wDUTWIWve44E944gd17G9d0ckaWt3CucU0yssPH/KTGQA+CzLytNqPRkHKoZjNsRM7MEexNxncFte05dTXMH+hu1m/WgXuCOHMX0Oo5cu+mlSP9/wDqttgfnXlypO1LZFX9qk7IO2vScxtxJpnxuFZ+sGsBcka621qUrsJ5R1ZodeWZgR4jLWBufOARnQ35BiB/ppv5EsYdz9cbFfsb/pmrcghWwOVb9thf11ANn7p4mJxIgTOpbKek0Fxa1imvGnJItrgW6SL0ZP8AxqJuqoN7jjtCYiUkEWXh3jS4qOHfVVZlaE3BK3BHI24Uti2fjx56Bjzs6gVHZNzMYZCTGMpa5Gdb2JvYa8bVhqT7FTO/6cVmGQAC40PHv1rp/wDI1PML3cdK2m3KxTL9FCE/5ifzvXGHcLGrq0anh9da5/NfBpCdsUOiiWy2KDNcAg9Y8vRT5sHeBYbnqkgaKVXJpwFgAR6z4U04jc3HHKAigKLDrr40owO5GMHWKpbsLipKDfYqdD9JvEkozGLKTroug42Nz3HlwtXHEzWVZEve9ydAPDTka0i3Yxg1cJrws4FvdXWPdbGWZOpY8s9rD2aOCqqZFOb5GvEbVaUqBGpYHU2vpY+ceQp8w+0AsUahFDZVLdVdDYXFrU2Qbl4tRZCgPb0ht6stLI90cXzMd/8A+h/8aix7U0alkleyFxxwbiBw5DnUWlxNmLEXBAGt7cLcfRUjTdXHftxe0f8AwrjiNy8Uwy5oQOzM/Hxy1lY35GnkY2T4/DlYVZQ2V2zKwJuOjK9uo1/OmPaeAw7nNCSgtcqb2HYFVrHgfzqUruLiAQS8Nwbg5pOPs1xxe4OKeRnOIi62puZCe/W2tVQfkHKxv2PFhkQAtI8gJu4ICC/YpBPZ2XqUrJl2dIwtfOONredEDxprwG4U0fGeI3/v/wAqfcVgDBgikrK30nIG1jlsNfCt21FmYq5EB6frNfLcd+gv2WpbsYOX6kira7FmLKoA5kgcKZ8aobEPlAyALccOQHLvp33bxaIMRmsQ8EirrYgnhodPSK4SurOtK6HHeTE4iQIkk0bKourIGym47SBmtpwHOsy7qYgx54pI2JHKVLEHgQGI1568wKN4toLLBholBUxoVzOVCt1I/NIP7vO3Kus20kZZbZfpjCwC3vlhjVGzELpqBp2E1jXLkmiNjA+FkRmuqhtCVDRkDsGh7xpWzwMujrlNgbXU8eHmn3VvLtKISswu5Nixa65mzXyjmosLXpdvHiQZCxXIrLGbD6p6KM2B58eNq6QlvuSUElaM4fBPJhmWMXPSDq5Rp1fOL8efCx495pvj2LKb2zEXYXDIB1WINgWB4jspZhsW4wzlWIXpbkglWvkXlaxHf/OmCbaozHrSHXjprXdyicbY8Zyb61xdz20yjaWIPCP3Ma1OIxX7H+Q3rdnSh0lkNcf01iovMlJH7LWYe+m5kxR+q/sW/MUfovFN9RvSyL+ZFNaXcmi+xIdn/KFIuksQPejWPst/OnzBb+4JtHkMZ/eVre0oI99V7LsOfn0a/wB6WIf91coNiOwH0uHuRexk11GlwAdanxCXceDfYt2DebBN5uKh8C6g+omnCLEo3mup8CD+VUbjNmdGOs0Tn9y5se+6ikJhAHC3oqrqB4HqelcGeqPT+dbvMnNlHiRXmhXJZQxLAHgbkeo06QxR38xb300FR5fQqx+pe+Ix0CC7TRKONy6j8zTdNvRgQp/pkHcBIjH3Gq3wjABCbaMhPocU9bybWU4aRVCi+XgAODqeVc55nFpVyajjtN2So7zYVrFZc4B+okj6/wCFT7q3/wDluHFrjEXfqr/RsTctYnKt49TYE2HYeyoxuPvAYcPkDW6zH1113m3mF8M7MbJPmPP+pmX/ALq5PqZatKRtYVV2SiDbyk9XD4o6c4JF/wBdqRbU30WDrSYTFKLE6iEaDif1t6Y8PvxDIwRZOseRDDhrzHdTNvrtPpI21v8ARke+kM+VypqiyxQStMkM3yrQAArhpje+hMY4dtiaR4j5Vr+bg2/xShfyU1WkjaJ/i/1V1iItyv6TXaU5IxCCZY2E+UmWQ9XCJr2yFv8AtFK13zxbebDAvjmbX2hUB2A1jwvoeXfUihx6jqhbEda/K3AD1g+upqkxpSJlgNvYhrZ+jH91SPzJqH7S3tnkzxzFWUP5oCqdDoQQL6W99IsXt6RdIiL9p5dvGo70jG7njx9PbUbfDZl+aFQmZndl6oJAJv3aUt2SwAu7AA284ZiRc6D9nhTImIGl1191/RxrL4gW1t7+FHG0TVuPuJx6kKuY3UMoIN7k5RfXh5vvpLDOwtm1FhYXI5f7NNGe9idAL2yjX03reLEDvNqw4UZbd2PTYnPMj5QDe+ZusOPPttypRtnE53zE3LW62gvy5WA0tpbSo6cVroB268KzJizxNu254+AFNIc2yRy2GCLFmt0tkGe6EELmYITqQTxHDXjyjcjm5sPzp3w0rLgHbIQDMBcXswsCbm1styNNdey9MJN9R/CtUQk6bRBFxwNN8WM6MrGL8C1+8vcj30zx4rLoOGvorSXFG51rsdCRNtE9tM7YvU0k+dUnZrm9cpRs6RlQvOK1rnDiTp3CksTAEE1iSYEAWHD386aCuYrbE6MD2g+4/wA6TRy6fyNJ82lahqukzqOwbrDxpxgmsy+NNAbUUpWTUeNWjNkkbFdT1fnSXHYouhUak208CD/Cm58T1aSyTgnW48DUnG2mWLpNDxs/FGNMpJBzWt48/CsbTxgcBMw0fv0sGH8aa4mW4OY+nWtsVICBwJvxtrzrGjezWrajvgoisgcMCB2EX4W5Ur2piiyNf9kimaU9lqOk6hHjW0t7ZlvY6s409P50oEotw/j+dNpf+Nb9KbcaskSLod9l4ix9B/OnKXH2W3+9ajEE9q7HEXFOCMVzTAnU21rikxFImfWsjEkcKjVixQZNayJD40laa/Z6qBJWiCsz+r0VoJBrrSS9YLVKJQqMn++6txiB6e+9Iw1bFxShRIY3YYBrJ1TMLuWXjYADJlva1+JtoeHBmfp7UrjxjHBtGEbL0oZpBfKLjQNYW4gakg8NDbRpzUoUbM1cr1vWhrRoyGrN60oFCm961t2UUGoQyFPPStpNa1FZvQpo3GugrQ1uqVSHU8K0tW54VqIjRg1zVqzV2EIrbohQCfU1tkNdbd9YzUBz6KsGM11LVoWoDnatlNBasIedRoA5rStmNAWlA1FZvWStYoQzRatxGT3VqwtQGLVsE7KFYV2FUD5hh/8AjJcx/r1C24knKSDl1IsGPWsNBxNrR8oKfjEi4AMV67ykI/0Y6qlS6+dnJvlNwNLgXsbUzWqgTGtTRRWQYoFFFUp0UULWKKyDNbgCiiqgAk7BXTIeZoorRAykcD66FkooqFMNN3VqJCaKKAL1rmooqg1LVqTWaKhDArdUoooDNhReiigN1StwtFFUGHa1JjRRUYCMXNKQKKKA3zG1rm3G19Lnibdug9Va0UVQf//Z',
      category: 'Mobile',
      techStack: ['React js', 'html', 'JavaScript', 'axios', 'css', 'Redux'],
      demoLink: 'https://nirmaanconstructioncom.netlify.app/',
      githubLink:
        '  https://github.com/sachin-kore/Home-construction-repo-Project',
    },
  ]

  const categories = ['All', 'Websites', 'Applications', 'Mobile']

  return (
    <section
      id="projects"
      className={`py-20 ${dark ? 'bg-gray-800' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-white rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 '
                  : 'bg-white dark:bg-gray-700  hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            return (
              <div
                className={`group ${
                  dark ? 'bg-gray-700' : 'bg-white'
                } rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in`}
                key={project.title}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3
                    className={`${
                      dark ? 'text-gray-300' : 'text-black'
                    } text-xl font-semibold mb-2`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`${
                      dark ? 'text-gray-300' : 'text-gray-600'
                    } mb-4`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 ${
                          dark ? 'text-purple-300' : 'text-purple-600'
                        }  rounded-full`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.demoLink}
                      className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className={`flex items-center gap-2 ${
                        dark ? 'text-purple-400' : 'text-purple-600'
                      }  hover:text-purple-700 `}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
