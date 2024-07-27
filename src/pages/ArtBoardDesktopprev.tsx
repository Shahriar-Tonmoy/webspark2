import { useRef, useEffect, useState } from 'react';
import { fabric } from 'fabric';
import React from 'react';
import { LuPencilLine } from "react-icons/lu";
import { RiEraserLine } from "react-icons/ri";
import { LuRectangleHorizontal } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa";
import { IoTriangleOutline } from "react-icons/io5";
import { PiTextbox } from "react-icons/pi";
import { GiSelect } from "react-icons/gi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiSolidFileExport } from "react-icons/bi";
import { SketchBtnSelector } from '@/functions/enums/sketchenum';
import { useNavigate } from 'react-router';
import { AppState } from '@/types';
import { setImage } from '@/reducer/listReducer';
import { setAppState } from '@/reducer/stateReducer';
import { useDispatch } from 'react-redux';
import { setimreadtState } from '@/reducer/imageready';
// import { RootState } from '@/store/store';
// import { useSelector } from 'react-redux';
//import { Transform } from 'fabric/fabric-impl';
import logo from '../assets/images/glogo.svg';
import { FaRegImage } from "react-icons/fa";
import { WiStars } from "react-icons/wi";

//import Close from '../assets/images/close.svg';
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";

const ArtboardDesktopprev = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvas = useRef<fabric.Canvas | null>(null);
  const selectedObject = useRef<fabric.Object | null>(null);
  const fileInputRef = useRef(null);
  const dlete = useRef(null);
  const [linewidth, setLineWidth] = useState(5);
  const [color, setColor] = useState('#cbd5e1');
  const [strokeColor, setStrokeColor] = useState('#000000');
  const [btnstate, setbtnstate] = useState(SketchBtnSelector.PENCIL);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const { innerWidth: width, innerHeight: height } = window;
  const clipboardraw = useRef<fabric.Object | null>(null);
  //const [deleteico, setdeleteico] = useState<HTMLImageElement>(null);
  
  const mobile = width <= 500 ? true : false;
 // const canvasHistory = useRef([]);
  const undoStack = useRef<fabric.Object[][]>([]);
  //const imreadyst = useSelector((state: RootState) => state.item2.apstate);
  const setim = (image: string[]) => {
    dispatch(setImage(image));
  };
  const setstateapp = (st: AppState) => {
    dispatch(setAppState(st))
  }
  const setimready = (st: boolean) => {
    dispatch(setimreadtState(st))
  }


  useEffect(() => {
    canvas.current = new fabric.Canvas(canvasRef.current);

    // Add initial shapes or configurations
    // const rect = new fabric.Rect({
    //   left: 200,
    //   top: 100,
    //   fill: 'red',
    //   width: 100,
    //   height: 100,
    // });
    // const text = new fabric.Textbox('test', { height: 200, width: 200, left: 250, top: 100 });

    // canvas.current.add(rect);
    // canvas.current.add(text);
    canvas.current.on('mouse:up', (e) => {
      const target = e.target;
        //console.log('selected')
        //console.log(target)
        selectedObject.current = target;
    });
    initializeCanvas()
    

    // return () => {
    //   if (canvas.current) {
    //     canvas.current.dispose(); // Dispose the canvas when unmounting
    //   }
    // };
  }, []);

  const handleUndo = () => {
    popCanvasState();
  };

  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'z') {
      handleUndo();
    }
  };
  const handleKeycp = (event) => {
    if (event.ctrlKey && event.key === 'c') {
      handleCopy();
    }
  };
  const handleKeypaste = (event) => {
    if (event.ctrlKey && event.key === 'v') {
      console.log('trying to paste')
      handlePaste();
    }
  };
  const handleKeydel = (event) => {
    if (event.key == 'Delete') {
      dlete.current.click();
    }
  };

  useEffect(() => {
    // Add event listener for Ctrl+Z
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keydown', handleKeycp);
    document.addEventListener('keydown', handleKeypaste);
    document.addEventListener('keydown', handleKeydel);

    return () => {
      // Remove event listener on component unmount
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keydown', handleKeycp);
      document.removeEventListener('keydown', handleKeypaste);
      document.removeEventListener('keydown', handleKeydel);
    };
  }, []);

  const initializeCanvas = () => {
    canvas.current?.clear();
    undoStack.current = [];
    canvas.current.on('mouse:up', (e) => {
      const target = e.target;
      selectedObject.current = target;
    });
  };

  const pushCanvasState = () => {
    const canvasObjects = canvas.current?.getObjects();
    if (canvasObjects) {
      undoStack.current.push(JSON.parse(JSON.stringify(canvasObjects)));
    }
  };

  const popCanvasState = () => {
    const canvasObjects = undoStack.current.pop();
    if (canvasObjects) {
      canvas.current?.clear();
      canvas.current?.loadFromJSON({ objects: canvasObjects }, () => {console.log('running')});
      canvas.current?.renderAll();
    }
  };

  const handleCopy = () => {
    if (selectedObject.current) {
      console.log('copying')
      const activeObject = selectedObject.current;
      if (activeObject) {
        console.log(activeObject.type)
        clipboardraw.current = fabric.util.object.clone(activeObject)
        console.log(clipboardraw.current.type)
      }
    }
  };

  // Function to paste the copied object
  const handlePaste = () => {
    console.log('inside paste');
    console.log(clipboardraw.current.type);
    if (canvas.current && clipboardraw.current) {
      pushCanvasState();
        console.log(clipboardraw.current.type);
        canvas.current?.add(clipboardraw.current);
        canvas.current?.setActiveObject(clipboardraw.current);
        canvas.current?.requestRenderAll();
    }
  };

  const handleAddPencil = () => {
    pushCanvasState();
    setbtnstate(SketchBtnSelector.PENCIL);
    if (canvas.current) {
      canvas.current.isDrawingMode = true;
      canvas.current.freeDrawingBrush = new fabric.PencilBrush(canvas.current);
      canvas.current.freeDrawingBrush.width = 2;
      canvas.current.freeDrawingBrush.color = strokeColor;
      selectedObject.current = null
    }
  };
  const handleeraser = () => {
    pushCanvasState();
    setbtnstate(SketchBtnSelector.ERASER);
    if (canvas.current) {
      canvas.current.isDrawingMode = true;
      const pencil = new fabric.PencilBrush(canvas.current);
      canvas.current.freeDrawingBrush = pencil
      canvas.current.freeDrawingBrush.width = 20;
      canvas.current.freeDrawingBrush.color = 'white'

      selectedObject.current = null
    }
  };

  const handleAddRectangle = () => {
    pushCanvasState();
    setbtnstate(SketchBtnSelector.RECTANGLE);
    if (canvas.current) {
      canvas.current.isDrawingMode = false;
      const rect = new fabric.Rect({
        left: 300,
        top: 200,
        fill: color,
        width: 150,
        height: 100,
        stroke: strokeColor, // Set the border color
        strokeWidth: 2,
      });
      
      canvas.current.add(rect);
      canvas.current.setActiveObject(rect)
      canvas.current.requestRenderAll()
    }
  };

  const handleAddTextbox = () => {
    pushCanvasState();
    setbtnstate(SketchBtnSelector.TEXT);
    if (canvas.current) {
      canvas.current.isDrawingMode = false;
      const textbox = new fabric.IText('New Textbox', {
        left: 100,
        top: 100,
        fill: 'black',
        fontSize: 40,
      });
      canvas.current.add(textbox);
      canvas.current.setActiveObject(textbox);
      canvas.current.requestRenderAll(); // Re-render the canvas after adding the textbox
    }
  };
  const handleAddCircle = () => {
    pushCanvasState();
    setbtnstate(SketchBtnSelector.CIRCLE);
    if (canvas.current) {
      canvas.current.isDrawingMode = false;
      const circle = new fabric.Circle({
        left: 100,
        top: 100,
        radius: 50,
        fill: color,
        stroke: strokeColor,
        strokeWidth: 2,
      });
      canvas.current.add(circle);
      canvas.current.setActiveObject(circle);
      canvas.current.requestRenderAll(); // Re-render the canvas after adding the circle
    }
  };

  const handleAddTriangle = () => {
    pushCanvasState();
    setbtnstate(SketchBtnSelector.TRIANGLE);
    if (canvas.current) {
      canvas.current.isDrawingMode = false;
      const triangle = new fabric.Triangle({
        left: 100,
        top: 100,
        width: 100,
        height: 100,
        fill: color,
        stroke: strokeColor,
        strokeWidth: 2,
      });
      canvas.current.add(triangle);
      canvas.current.setActiveObject(triangle);
      canvas.current.requestRenderAll(); // Re-render the canvas after adding the triangle
    }
  };

  // const handleAddText = () => {
  //   if (canvas.current) {
  //     canvas.current.isDrawingMode = false;
  //     const text = new fabric.IText('Hello, World!', {
  //       left: 100,
  //       top: 100,
  //       fill: 'black',
  //       fontSize: 16,
  //     });
  //     canvas.current.add(text);
  //     canvas.current.setActiveObject(text);
  //     canvas.current.requestRenderAll(); // Re-render the canvas after adding the text
  //   }
  // };

  const handleImageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    pushCanvasState();
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        fabric.Image.fromURL(imageUrl, (image) => {
          image.set({
            left: 100,
            top: 100,
            scaleX: 0.5,
            scaleY: 0.5,
          });
          canvas.current?.add(image);
          canvas.current?.bringForward(image);
          canvas.current?.setActiveObject(image);
          canvas.current?.requestRenderAll(); // Re-render the canvas after adding the image
        });
      };
      reader.readAsDataURL(file);
    }
  };
  
  
  const selector = () => {
    pushCanvasState();
    setbtnstate(SketchBtnSelector.SELECTOR);
    if (canvas.current) {
      canvas.current.isDrawingMode = false;
      canvas.current.requestRenderAll();
    }
  }
  
  


  const handleColorChange = () => {
    pushCanvasState();
    //console.log('trying to change color');
    //console.log(selectedObject.current);
    if (selectedObject.current && btnstate != SketchBtnSelector.PENCIL && btnstate != SketchBtnSelector.ERASER) {

      //console.log(selectedObject.current.type)
        if(selectedObject.current.type == 'i-text') {
            //console.log('idle')
            return
        }
        else if(selectedObject.current.type == 'path') {
            //console.log('idle')
            return
        }
        else {
      //console.log('inside')
      selectedObject.current.set('fill', color);
      canvas.current?.requestRenderAll(); // Re-render the canvas after modifying the object
        }
    }
  };

  const handlewidthchange = () => {
    pushCanvasState();
    //console.log('trying to change color');
    //console.log(selectedObject.current);
    if (selectedObject.current && btnstate != SketchBtnSelector.PENCIL && btnstate != SketchBtnSelector.ERASER) {
      if(selectedObject.current.type == 'i-text') {
        //console.log('idle')
        return
    }
    else {
      //console.log('inside')
      selectedObject.current.set('strokeWidth', linewidth);
      canvas.current?.requestRenderAll(); // Re-render the canvas after modifying the object
    }
    }
  };
  const handlewidthcolor = () => {
    pushCanvasState();
    //console.log('trying to change color');
    //console.log(selectedObject.current);
    if (selectedObject.current && btnstate != SketchBtnSelector.PENCIL && btnstate != SketchBtnSelector.ERASER) {
      //console.log('inside')
      selectedObject.current.set('stroke', strokeColor);
      canvas.current?.requestRenderAll(); // Re-render the canvas after modifying the object
    }
  };
  // const handlePencilWidthChange = () => {
  //   if (canvas.current && selectedObject.current) {
  //     if (selectedObject.current instanceof fabric.Path) {
  //       selectedObject.current.set('strokeWidth', linewidth);
  //       canvas.current.requestRenderAll(); // Re-render the canvas after modifying the object
  //     }
  //   }
  // };
  const handleDeleteItem = () => {
    pushCanvasState();
    if (canvas.current && selectedObject.current && btnstate != SketchBtnSelector.PENCIL && btnstate != SketchBtnSelector.ERASER) {
      if (selectedObject.current instanceof fabric.Path) {
        // For PencilBrush, remove the path object
        canvas.current.remove(selectedObject.current);
      } else {
        // For other objects, remove normally
        canvas.current.remove(selectedObject.current);
      }
      selectedObject.current = null;
      canvas.current?.requestRenderAll(); // Re-render the canvas after removing the object
    }
  };

  const toggleselection = (data: boolean) => {
    //pushCanvasState();
    if (selectedObject.current) {
      selectedObject.current.set('selectable', data)
      canvas.current?.requestRenderAll(); // Re-render the canvas after removing the object
      setActive(data)
    }
  };
  const getselection = () => {
    if(selectedObject.current) {
      console.log(selectedObject.current.get('selectable'))
      return selectedObject.current.get('selectable')
    }
    else {
      console.log(false)
      return false
    }
  }

  const updateselection = () => {
    setActive(getselection);
  }


//   const sendtoback = () => {
//     if (canvas.current && selectedObject.current) {
//       canvas.current?.sendBackwards(selectedObject.current)
//       canvas.current?.requestRenderAll(); // Re-render the canvas after removing the object
//     }
//   };


  const handleExportAsPNG = () => {
    if (canvas.current) {
      const dataURL = canvas.current.toDataURL({
        format: 'png',
        quality: 1.0,
      });
  
      const img = new Image();
      img.src = dataURL;
  
      img.onload = () => {
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
  
        if (tempCtx) {
          tempCanvas.width = img.width;
          tempCanvas.height = img.height;
  
          // Set the background to white
          tempCtx.fillStyle = '#ffffff';
          tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
  
          // Draw the image on the white background
          tempCtx.drawImage(img, 0, 0);
  
          // Convert the canvas to data URL
          const newDataURL = tempCanvas.toDataURL('image/png');
          setimready(true)
          setim([newDataURL]);
          setstateapp(AppState.CODING)
          //console.log('in artboard state');
          //console.log(imreadyst);
          navigate('/code');
  
          // Create a link and trigger the download
          // const link = document.createElement('a');
          // link.href = newDataURL;
          // link.download = 'canvas.png';
          // link.click();
        }
      };
    }
  };
  
  const downloadcode = () => {
    if (canvas.current) {
      const dataURL = canvas.current.toDataURL({
        format: 'png',
        quality: 1.0,
      });
  
      const img = new Image();
      img.src = dataURL;
  
      img.onload = () => {
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
  
        if (tempCtx) {
          tempCanvas.width = img.width;
          tempCanvas.height = img.height;
  
          // Set the background to white
          tempCtx.fillStyle = '#ffffff';
          tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
  
          // Draw the image on the white background
          tempCtx.drawImage(img, 0, 0);
  
          // Convert the canvas to data URL
          const newDataURL = tempCanvas.toDataURL('image/png');
  
          // Create a link and trigger the download
          const link = document.createElement('a');
          link.href = newDataURL;
          link.download = 'canvas.png';
          link.click();
        }
      };
    }
  };
  // function deleteObject(eventData: MouseEvent, transform: Transform, x: number, y: number) {
  //   pushCanvasState();
  //   console.log(x+y)
	// 	const target = transform.target;
	// 	const canvas = target.canvas;
	// 	canvas.remove(target);
  //   canvas.requestRenderAll();
  //   return true
	// }
  // useEffect(() => {
  // const imgs = new Image();
  // imgs.src = Close;
  // setdeleteico(imgs);
  // }, [])
  // const convertSvgToImageBitmap = async () => {
  //   const response = await fetch(Close);
  //   const svgText = await response.text();
  //   const svgBlob = new Blob([svgText], { type: 'image/svg+xml' });
  //   const imageBitmap = await createImageBitmap(svgBlob);
  //   setdeleteico(imageBitmap);
  // };
  // useEffect(() => {convertSvgToImageBitmap()}, []);
  // if (deleteico) {
  // fabric.Object.prototype.transparentCorners = false;
  // fabric.Object.prototype.cornerColor = 'blue';
  // fabric.Object.prototype.cornerStyle = 'circle';
  
  // const renderIcon = function(ctx, left, top, styleOverride, fabricObject) {
  //   const size = this.cornerSize;
  //   ctx.save();
  //   ctx.translate(left, top);
  //   ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  //   ctx.drawImage(deleteico, -size/2, -size/2, size, size);
  //   ctx.restore();
  // };
  
  // fabric.Object.prototype.controls.deleteControl = new fabric.Control({
  //   x: 0.5,
  //   y: -0.5,
  //   offsetY: 16,
  //   cursorStyle: 'pointer',
  //   mouseUpHandler: deleteObject,  // Make sure deleteObject is defined
  //   render: renderIcon,
  //   sizeX: 24,
  //   sizeY: 24,
  //   touchSizeX: 24,
  //   touchSizeY: 24,
  //   withConnection: true,
  //   actionName: 'delete'
  // });
// }
  const handleUploadButtonClick = () => {
    // Trigger the file input click event when the "Upload" button is clicked
    fileInputRef.current.click();
  };
  
  
  handlewidthchange();
  handleColorChange();
  handlewidthcolor();
  handlewidthcolor();
  useEffect(handleAddPencil, [])
  useEffect(() => {
  updateselection()
  },[selectedObject])
  // if(clipboardraw) {
  //   console.log(clipboardraw.type);
  // }
  // handlePencilWidthChange();

  return (
    <div className='flex flex-row bg-white w-screen h-screen'>
      <div className='flex flex-col h-screen bg-[#d8e3ea] w-1/5 p-4 text-white font-bold overflow-y-auto shadow-gray-400 shadow-xl'>
        <div className='w-full mb-10'>
            <img src={logo} />
        </div>
        <button onKeyDown = {handleDeleteItem} className={`flex flex-row w-full h-18 justify-center content-center my-2 py-3 rounded-md ${
          btnstate === SketchBtnSelector.SELECTOR ? 'bg-[#0a676c]' : 'bg-[#17212a]'
          }`} onClick={selector}>
          <div className='my-auto mr-2'>
            <GiSelect />
          </div>
          {!mobile&&<div className='lg:block md:block my-auto'>
            <p className='my-auto'>Selector Mode</p>
          </div>}
        </button>
        
        <button ref={dlete} className='flex flex-row w-full h-18 bg-[#17212a] active:bg-[#0a676c] justify-center content-center my-2 py-3 rounded-md' onClick={handleDeleteItem}>
          <div className='my-auto mr-2'>
            <RiDeleteBin6Line />
          </div>
          {!mobile&&<div className='lg:block md:hidden my-auto sm:hidden'>
            <p className='my-auto'>Delete</p>
          </div>}
        </button>
        
        {!mobile&&<button className='flex flex-row w-full h-18 bg-[#17212a] active:bg-[#0a676c] justify-center content-center my-2 py-3 rounded-md' onClick={downloadcode}>
          <div className='my-auto mr-2'>
            <BiSolidFileExport />
          </div>
          <div className='lg:block md:hidden my-auto sm:hidden'>
            <p className='my-auto'>Export</p>
          </div>
        </button>}
        {!mobile&&<button className='flex flex-row w-full h-18 bg-[#17212a] active:bg-[#0a676c] justify-center content-center my-2 py-3 rounded-md' onClick={handleExportAsPNG}>
          <div className='my-auto mr-2 text-2xl'>
            <WiStars />
          </div>
          <div className='lg:block md:block my-auto sm:hidden'>
            <p className='my-auto'>Generate</p>
          </div>
        </button>}
        <button className='flex flex-row w-full h-14 bg-[#17212a] active:bg-[#0a676c] justify-center content-center my-2 py-3 rounded-md' onClick={() => {toggleselection(!active)}}>
          <div className='my-auto mr-2'>
            {active?<FaLock />:<FaLockOpen />}
          </div>
          <div className='lg:block md:block my-auto sm:hidden'>
            <p>{active?'Lock':'UnLocked'}</p>
          </div>
        </button>
        <input type='range' className='w-full my-4 text-green-700' value={linewidth} min={0} max={150} onChange={(e) => {setLineWidth(parseFloat(e.target.value))}}/>
        <button className={`flex flex-row w-full h-14 justify-center content-center my-2 py-3 rounded-md ${
          btnstate === SketchBtnSelector.PENCIL ? 'bg-[#0a676c]' : 'bg-[#17212a]'
        }`} onClick={handleAddPencil}>
          <div className='my-auto mr-2'>
            <LuPencilLine />
          </div>
          {!mobile&&<div className='lg:block md:block my-auto sm:hidden'>
            <p>Pencil</p>
          </div>}
        </button>
        
        <button className={`flex flex-row w-full h-14 justify-center content-center my-2 py-3 rounded-md ${
          btnstate === SketchBtnSelector.ERASER ? 'bg-[#0a676c]' : 'bg-[#17212a]'
        }`} onClick={handleeraser}>
          <div className='my-auto mr-2'>
            <RiEraserLine />
          </div>
          {!mobile&&<div className='lg:block md:block my-auto sm:hidden'>
            <p>Eraser</p>
          </div>}
        </button>
        <button className={`flex flex-row w-full h-14 justify-center content-center my-2 py-3 rounded-md ${
          btnstate === SketchBtnSelector.RECTANGLE ? 'bg-[#0a676c]' : 'bg-[#17212a]'
        }`} onClick={handleAddRectangle}>
          <div className='my-auto mr-2'>
            <LuRectangleHorizontal />
          </div>
          {!mobile&&<div className='lg:block md:block my-auto sm:hidden'>
            <p>Rectangle</p>
          </div>}
        </button>
        <button className={`flex flex-row w-full h-14 justify-center content-center my-2 py-3 rounded-md ${
          btnstate === SketchBtnSelector.CIRCLE ? 'bg-[#0a676c]' : 'bg-[#17212a]'
        }`} onClick={handleAddCircle}>
          <div className='my-auto mr-2'>
            <FaRegCircle />
          </div>
          {!mobile&&<div className='lg:block md:block my-auto sm:hidden'>
            <p>Circle</p>
          </div>}
        </button>
        
        <button className={`flex flex-row w-full h-14 justify-center content-center my-2 py-3 rounded-md ${
          btnstate === SketchBtnSelector.TRIANGLE ? 'bg-[#0a676c]' : 'bg-[#17212a]'
        }`} onClick={handleAddTriangle}>
          <div className='my-auto mr-2'>
            <IoTriangleOutline />
          </div>
          {!mobile&&<div className='lg:block md:block my-auto sm:hidden'>
            <p>Triangle</p>
          </div>}
        </button>
        <button className={`flex flex-row w-full h-14 justify-center content-center my-2 py-3 rounded-md ${
          btnstate === SketchBtnSelector.TEXT ? 'bg-[#0a676c]' : 'bg-[#17212a]'
        }`} onClick={handleAddTextbox}>
          <div className='my-auto mr-2'>
            <PiTextbox />
          </div>
          {!mobile&&<div className='lg:block md:block my-auto sm:hidden'>
            <p>TextBox</p>
          </div>}
        </button>
        
        {/* <button onClick={handleAddText} className='w-18 h-8 bg-slate-300'>Add Text</button> */}
        <div className='flex flex-row my-2 gap-2 content-center text-black'>
          <input type='color' value={color} onChange={(e) => {setColor(e.target.value)}} className='h-10 w-18' />
          <p className='my-auto font-medium'>Fill Color</p>
        </div>
        <div className='flex flex-row my-2 gap-2 content-center text-black'>
          <input type='color' value={strokeColor} onChange={(e) => {setStrokeColor(e.target.value)}} className='h-10 w-18' />
          <p className='my-auto font-medium'>Stroke Color</p>
        </div>
        <input
        type="file"
        className="hidden"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageInputChange}
        />
        <button
        className="flex bg-blue-500 text-white py-2 px-4 rounded-md justify-center"
        onClick={handleUploadButtonClick}
      >
        <div className='my-auto mr-2'>
        <FaRegImage />
        </div>
        <p className='my-auto'>
        Upload
        </p>
      </button>
        <div className='py-10'>

        </div>

        {/* <button onClick={handleColorChange} className='w-18 h-8 bg-slate-300'>Change Color</button> */}
        
        {/* <button className={`flex flex-row w-full h-14 justify-center content-center my-2 py-3 rounded-md ${
          btnstate === SketchBtnSelector.SELECTOR ? 'bg-[#0a676c]' : 'bg-[#17212a]'
          }`} onClick={selector}>
          <div className='my-auto mr-2'>
            <GiSelect />
          </div>
          <div className='my-auto'>
            <p>Selector Mode</p>
          </div>
        </button>
        
        <button className='flex flex-row w-full h-14 bg-[#17212a] active:bg-[#0a676c] justify-center content-center my-2 py-3 rounded-md' onClick={handleDeleteItem}>
          <div className='my-auto mr-2'>
            <RiDeleteBin6Line />
          </div>
          <div className='my-auto'>
            <p>Delect Selected</p>
          </div>
        </button>
        
        <button className='flex flex-row w-full h-14 bg-[#17212a] active:bg-[#0a676c] justify-center content-center my-2 py-3 rounded-md' onClick={downloadcode}>
          <div className='my-auto mr-2'>
            <BiSolidFileExport />
          </div>
          <div className='my-auto'>
            <p>Export as png</p>
          </div>
        </button>
        <button className='flex flex-row w-full h-14 bg-[#17212a] active:bg-[#0a676c] justify-center content-center my-2 py-3 rounded-md' onClick={handleExportAsPNG}>
          <div className='my-auto mr-2'>
            <BiSolidFileExport />
          </div>
          <div className='my-auto'>
            <p>Generate webpage</p>
          </div>
        </button> */}
      </div>
      <div className='flex h-full w-full content-center justify-center'>
      <div className='bg-black p-2 h-fit w-fit my-auto mx-auto'>
      <div className='bg-white border-black border-8 w-fit h-fit'>
      <canvas ref={canvasRef} width={((width/100)*80)-20} height={height-40} />
      </div>
      </div>
      </div>
    </div>
  );
};

export default ArtboardDesktopprev;
