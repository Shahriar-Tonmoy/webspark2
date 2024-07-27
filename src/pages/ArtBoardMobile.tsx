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
import { SketchBtnSelector } from '@/functions/enums/sketchenum';
import { useNavigate } from 'react-router';
import { AppState } from '@/types';
import { setImage } from '@/reducer/listReducer';
import { setAppState } from '@/reducer/stateReducer';
import { useDispatch } from 'react-redux';
import { setimreadtState } from '@/reducer/imageready';
// import { RootState } from '@/store/store';
// import { useSelector } from 'react-redux';
import { Transform } from 'fabric/fabric-impl';
import { FaCode } from "react-icons/fa";

const ArtboardMobile = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvas = useRef<fabric.Canvas | null>(null);
  const selectedObject = useRef<fabric.Object | null>(null);
  //const fileInputRef = useRef(null);
  const [linewidth, setLineWidth] = useState(5);
  const [color, setColor] = useState('#cbd5e1');
  const [strokeColor, setStrokeColor] = useState('#000000');
  const [btnstate, setbtnstate] = useState(SketchBtnSelector.PENCIL);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const [active, setActive] = useState(false);
  const { innerWidth: width, innerHeight: height } = window;
  const clipboardraw = useRef<fabric.Object | null>(null);
  //const mobile = width <= 500 ? true : false;
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
      handleDeleteItem();
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
    }
  };
  const handleeraser = () => {
    pushCanvasState();
    setbtnstate(SketchBtnSelector.ERASER);
    if (canvas.current) {
      canvas.current.isDrawingMode = true;
      canvas.current.freeDrawingBrush = new fabric.PencilBrush(canvas.current);
      canvas.current.freeDrawingBrush.width = 20;
      canvas.current.freeDrawingBrush.color = 'white'
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
    if (selectedObject.current) {

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
    if (selectedObject.current) {
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
    if (selectedObject.current) {
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
    if (canvas.current && selectedObject.current) {
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

  // const toggleselection = (data: boolean) => {
  //   //pushCanvasState();
  //   if (selectedObject.current) {
  //     selectedObject.current.set('selectable', data)
  //     canvas.current?.requestRenderAll(); // Re-render the canvas after removing the object
  //     setActive(data)
  //   }
  // };
  // const getselection = () => {
  //   if(selectedObject.current) {
  //     console.log(selectedObject.current.get('selectable'))
  //     return selectedObject.current.get('selectable')
  //   }
  //   else {
  //     console.log(false)
  //     return false
  //   }
  // }

  // const updateselection = () => {
  //   setActive(getselection);
  // }


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
  
  // const downloadcode = () => {
  //   if (canvas.current) {
  //     const dataURL = canvas.current.toDataURL({
  //       format: 'png',
  //       quality: 1.0,
  //     });
  
  //     const img = new Image();
  //     img.src = dataURL;
  
  //     img.onload = () => {
  //       const tempCanvas = document.createElement('canvas');
  //       const tempCtx = tempCanvas.getContext('2d');
  
  //       if (tempCtx) {
  //         tempCanvas.width = img.width;
  //         tempCanvas.height = img.height;
  
  //         // Set the background to white
  //         tempCtx.fillStyle = '#ffffff';
  //         tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
  
  //         // Draw the image on the white background
  //         tempCtx.drawImage(img, 0, 0);
  
  //         // Convert the canvas to data URL
  //         const newDataURL = tempCanvas.toDataURL('image/png');
  
  //         // Create a link and trigger the download
  //         const link = document.createElement('a');
  //         link.href = newDataURL;
  //         link.download = 'canvas.png';
  //         link.click();
  //       }
  //     };
  //   }
  // };
  function deleteObject(eventData: MouseEvent, transform: Transform, x: number, y: number) {
    pushCanvasState();
    console.log(x+y)
		const target = transform.target;
		const canvas = target.canvas;
		canvas.remove(target);
    canvas.requestRenderAll();
    return true
	}
  const deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

  const img = document.createElement('img');
  img.src = deleteIcon;
  fabric.Object.prototype.transparentCorners = false;
  fabric.Object.prototype.cornerColor = 'blue';
  fabric.Object.prototype.cornerStyle = 'circle';
  
  const renderIcon = function(ctx, left, top, styleOverride, fabricObject) {
    const size = this.cornerSize;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(img, -size/2, -size/2, size, size);
    ctx.restore();
  };
  
  fabric.Object.prototype.controls.deleteControl = new fabric.Control({
    x: 0.5,
    y: -0.5,
    offsetY: 16,
    cursorStyle: 'pointer',
    mouseUpHandler: deleteObject,  // Make sure deleteObject is defined
    render: renderIcon,
    sizeX: 24,
    sizeY: 24,
    touchSizeX: 24,
    touchSizeY: 24,
  });
  // const handleUploadButtonClick = () => {
  //   // Trigger the file input click event when the "Upload" button is clicked
  //   fileInputRef.current.click();
  // };
  
  
  handlewidthchange();
  handleColorChange();
  handlewidthcolor();
  handlewidthcolor();
  useEffect(handleAddPencil, [])
  useEffect(() => {
  //updateselection()
  },[selectedObject])
  // handlePencilWidthChange();

  return (
    <div className='flex flex-col bg-white w-screen h-screen'>
        <a onClick={handleExportAsPNG} className="fixed bottom-10 right-4 flex items-center justify-center p-3 transition duration-300 transform bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md floating-btn">
    <FaCode />
  </a>
      <div className='flex flex-row  h-28 bg-[#d8e3ea] w-full p-1 text-white font-bold overflow-x-auto shadow-gray-400 shadow-xl gap-4'>
      <button className={`flex flex-row py-1 px-3 justify-center content-center rounded-full ${
          btnstate === SketchBtnSelector.SELECTOR ? 'bg-[#0a676c]' : 'bg-[#17212a]'
          }`} onClick={selector}>
          <div className='my-auto text-xl'>
            <GiSelect />
          </div>
        </button>
        
        <button className='flex flex-row py-1 px-3 bg-[#17212a] active:bg-[#0a676c] justify-center content-center rounded-full' onClick={handleDeleteItem}>
          <div className='my-auto text-xl'>
            <RiDeleteBin6Line />
          </div>
        </button>
        

        {/* {<button className='flex flex-row py-1 px-3 bg-[#17212a] active:bg-[#0a676c] justify-center content-center my-2 py-3 rounded-full' onClick={handleExportAsPNG}>
          <div className='my-auto mr-2'>
            <BiSolidFileExport />
          </div>
          <div className='lg:block md:block my-auto sm:hidden'>
            <p>Generate webpage</p>
          </div>
        </button>} */}
        {/* <input type='range' className='w-full my-4 text-green-700' value={linewidth} min={0} max={150} onChange={(e) => {setLineWidth(parseFloat(e.target.value))}}/> */}
        <button className={`flex flex-row py-1 px-3 justify-center content-center rounded-full ${
          btnstate === SketchBtnSelector.PENCIL ? 'bg-[#0a676c]' : 'bg-[#17212a]'
        }`} onClick={handleAddPencil}>
          <div className='my-auto text-xl'>
            <LuPencilLine />
          </div>
        </button>
        
        <button className={`flex flex-row py-1 px-3 justify-center content-center rounded-full ${
          btnstate === SketchBtnSelector.ERASER ? 'bg-[#0a676c]' : 'bg-[#17212a]'
        }`} onClick={handleeraser}>
          <div className='my-auto text-xl'>
            <RiEraserLine />
          </div>
        </button>
        <button className={`flex flex-row py-1 px-3 justify-center content-center rounded-full ${
          btnstate === SketchBtnSelector.RECTANGLE ? 'bg-[#0a676c]' : 'bg-[#17212a]'
        }`} onClick={handleAddRectangle}>
          <div className='my-auto text-xl'>
            <LuRectangleHorizontal />
          </div>
        </button>
        <button className={`flex flex-row py-1 px-3 justify-center content-center rounded-full ${
          btnstate === SketchBtnSelector.CIRCLE ? 'bg-[#0a676c]' : 'bg-[#17212a]'
        }`} onClick={handleAddCircle}>
          <div className='my-auto text-xl'>
            <FaRegCircle />
          </div>
        </button>
        
        <button className={`flex flex-row py-1 px-3 justify-center content-center rounded-full ${
          btnstate === SketchBtnSelector.TRIANGLE ? 'bg-[#0a676c]' : 'bg-[#17212a]'
        }`} onClick={handleAddTriangle}>
          <div className='my-auto text-xl'>
            <IoTriangleOutline />
          </div>
        </button>
        <button className={`flex flex-row py-1 px-3 justify-center content-center rounded-full ${
          btnstate === SketchBtnSelector.TEXT ? 'bg-[#0a676c]' : 'bg-[#17212a]'
        }`} onClick={handleAddTextbox}>
          <div className='my-auto text-xl'>
            <PiTextbox />
          </div>
        </button>
        
        {/* <button onClick={handleAddText} className='w-18 h-8 bg-slate-300'>Add Text</button> */}
        <div className='flex flex-row my-2 gap-2 content-center text-black'>
          <input type='color' value={color} onChange={(e) => {setColor(e.target.value)}} className='h-10 w-18' />
          <p className='my-auto font-medium'>Fill Color</p>
        </div>
        <div className='flex flex-row my-2 gapy-1 px-3 content-center text-black'>
          <input type='color' value={strokeColor} onChange={(e) => {setStrokeColor(e.target.value)}} className='h-10 w-18' />
          <p className='my-auto font-medium'>Stroke color</p>
        </div>
        {/* <input
          type="file"
          className='text-black p-4 font-medium mb-10 w-full'
          accept="image/*"
          onChange={handleImageInputChange}
        /> */}
        {/* <button onClick={handleColorChange} className='w-18 h-8 bg-slate-300'>Change Color</button> */}
        
        {/* <button className={`flex flex-row w-full h-14 justify-center content-center my-2 py-3 rounded-full ${
          btnstate === SketchBtnSelector.SELECTOR ? 'bg-[#0a676c]' : 'bg-[#17212a]'
          }`} onClick={selector}>
          <div className='my-auto mr-2'>
            <GiSelect />
          </div>
          <div className='my-auto'>
            <p>Selector Mode</p>
          </div>
        </button>
        
        <button className='flex flex-row w-full h-14 bg-[#17212a] active:bg-[#0a676c] justify-center content-center my-2 py-3 rounded-full' onClick={handleDeleteItem}>
          <div className='my-auto mr-2'>
            <RiDeleteBin6Line />
          </div>
          <div className='my-auto'>
            <p>Delect Selected</p>
          </div>
        </button>
        
        <button className='flex flex-row w-full h-14 bg-[#17212a] active:bg-[#0a676c] justify-center content-center my-2 py-3 rounded-full' onClick={downloadcode}>
          <div className='my-auto mr-2'>
            <BiSolidFileExport />
          </div>
          <div className='my-auto'>
            <p>Export as png</p>
          </div>
        </button>
        <button className='flex flex-row w-full h-14 bg-[#17212a] active:bg-[#0a676c] justify-center content-center my-2 py-3 rounded-full' onClick={handleExportAsPNG}>
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
      <canvas ref={canvasRef} width={(width/100)*95} height={height-200} />
      </div>
      </div>
      </div>
      <input
          type="file"
          className='text-black p-4 font-medium mb-2 w-full'
          accept="image/*"
          onChange={handleImageInputChange}
        />
      <input type='range' className='w-full mb-4 text-green-700' value={linewidth} min={0} max={150} onChange={(e) => {setLineWidth(parseFloat(e.target.value))}}/>
    </div>
  );
};

export default ArtboardMobile;
