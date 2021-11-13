const getColor = (color) => {
  switch (color) {
    case 'C_T':
      return 'Trắng'
    case 'C_De':
      return 'Đen'
    default:
      return 'Đỏ'
  }
}
const getColorCss = (color) => {
  switch (color) {
    case 'C_T':
      return 'gray'
    case 'C_De':
      return '#000'
    default:
      return '#e41414'
  }
}
const getType = (value) => {
  switch (value) {
    case 'T_M':
      return 'Mini/Hatchback'
    case 'T_Se':
      return 'Sedan'
    default:
      return 'SUV'
  }
}

const getGT = (value) => {
  switch (value) {
    case 'G1':
      return 'Nam'
    default:
      return 'Nữ'
  }
}
const getNN = (value) => {
  switch (value) {
    case 'N1':
      return 'Công nhân'
    case 'N2':
      return 'Giáo viên'
    case 'N3':
      return 'Bác sĩ'
    case 'N4':
      return 'Nhân viên văn phòng'
    default:
      return 'Doanh nhân'
  }
}
const getST = (value) => {
  switch (value) {
    case 'S1':
      return 'Du lịch'
    case 'S2':
      return 'Thể thao'
    default:
      return 'Khám phá, phiêu lưu'
  }
}

const getPrice = (value) => {
  switch (value) {
    case 'P_1':
      return 'từ 300 triệu đến 500 triệu'
    case 'P_2':
      return 'từ 500 triệu đến 800 triệu'
    case 'P_3':
      return 'từ 800 triệu đến 1,5 tỷ'
    case 'P_4':
      return 'từ 1,5 tỷ đến 2,5 tỷ'
    case 'P_5':
      return 'từ 2,5 tỷ đến 3,5 tỷ'
    default:
      return 'từ 3,5 tỷ đến trên 4 tỷ'
  }
}

export {
  getColor,
  getColorCss,
  getType,
  getGT,
  getNN,
  getST,
  getPrice,
}
